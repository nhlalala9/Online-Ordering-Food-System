import React, { useRef, useState, useEffect } from 'react'
import "./Crud.css";
import axios from 'axios';
import Sidebar from "../Sidebar";

function CRUD() {
   
    const [lists, setList] = useState([])
    const [updateState, setUpdateState] = useState(-1)
    // const [orders, setCrud] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:1337/api/products')
          .then(response => {
            setIsLoading(true);
            setList(response.data.data)
            console.log(lists)
          })
          .catch(err => console.log(err));
      }, []);
      
      const [data, setData] = useState([]);
      const handleSubmitt = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {data[key] = value});
        axios.post('http://localhost:1337/api/products', data)
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
      useEffect(() => {
        axios.delete(`http://localhost:1337/api/products/${3}`)
          .then(response => {
            setIsLoading(true);
            setList(response.data.data)
            console.log(lists, "delete function")
          })
          .catch(err => console.log(err));
      }, []);
    return (
        <div className='crud'>
            <div className="cud">
                {/* <Sidebar /> */}
            </div>
            <div>
                <AddList setList={setList} />
                <form onSubmit={handleSubmit}>
                    <table>
                        {
                            lists.map((current) => (
                                updateState === current.id ? <EditList current={current} lists={lists} setList={setList} /> :
                                    <tr>
                                        <td>{current.attributes.name}</td>
                                        <td>{current.attributes.price}</td>
                                        <td>{current.attributes.description}</td>
                                        <td><img src={current.attributes.Picture} alt="" className='image'></img></td>
                                        <td>
                                            <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                            <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                                        </td>
                                    </tr>
                            ))
                        }
                    </table>
                </form>
            </div>

        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const newlist = lists.map((li) => (
            li.id === updateState ? { ...li, name: name, price: price } : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({ current, lists, setList }) {
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, name: value } : li
        ))

        setList(newlist)
    }
    function handInputprice(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, price: value } : li
        ))

        setList(newlist)
    }
    function handInputdescription(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? { ...li, price: value } : li
        ))

        setList(newlist)
    }
    return (
        <tr>
            <td><input type="text" onChange={handInputname} name='name' value={current.name} /></td>
            <td><input type="text" onChange={handInputprice} name='price' value={current.price} /></td>
            <td><input type="text" onChange={handInputdescription} name='description' value={current.des} /></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

function AddList({ setList }) {
    const nameRef = useRef()
    const priceRef = useRef()
    const descriptionRef = useRef()

    function handleSubmitt(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const description = event.target.elements.description.value;
        const newlist = {
            id: 3,
            name,
            price,
            description
        }
        setList((prevList) => {
            return prevList.concat(prevList)
        })
        nameRef.current.value = ""
        priceRef.current.value = ""
        descriptionRef.current.value = ""
    }
    return (
        <form className='addForm' onSubmit={handleSubmitt}>
            <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
            <input type="text" name="price" placeholder="Enter Price" ref={priceRef} />
            <input type="text" name="description" placeholder="Enter description" ref={descriptionRef} />
            <button type="submit" onClick={handleSubmitt}>Add</button>
        </form>
    )
}

export default CRUD;