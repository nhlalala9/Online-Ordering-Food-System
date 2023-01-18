import React, { useRef, useState } from 'react'
import "./Crud.css";

function CRUD() {
    const list = [
        {
            id: 1, 
            name: "Burger",
            price: "20",
            description: "A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.",
            picture:"https://static.fanpage.it/wp-content/uploads/sites/22/2021/09/beef-burger.jpg"
        },
        {
            id: 2, 
            name: "pizza",
            price: "30",
            description:"A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.",
            picture:"https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800"
        },
        {
            id: 3, 
            name: "chicken",
            price: "30",
            description:"A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.",
            picture:"https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800"
        },
        
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
        <div className='crud'>
            <div>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
            <table>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.price}</td>
                            <td>{current.description}</td>
                            <td><img src={current.picture} alt="" className='image'></img></td>
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
            li.id === updateState ? {...li, name:name, price: price} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, name :value} : li
        ))

        setList(newlist)
    }
    function handInputprice(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, price :value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>
            <td><input type="text" onChange={handInputname} name='name' value={current.name}/></td>
            <td><input type="text" onChange={handInputprice} name='price' value={current.price}/></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

function AddList({setList}) {
    const nameRef = useRef()
    const priceRef = useRef()
    const descriptionRef=useRef()

    function handleSubmit(event) {
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
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        priceRef.current.value = ""
        descriptionRef.current.value=""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name" ref={nameRef}/>
            <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
            <input type="text" name="description" placeholder="Enter description" ref={descriptionRef}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default CRUD;