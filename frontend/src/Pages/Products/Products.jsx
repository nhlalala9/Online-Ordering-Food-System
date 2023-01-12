import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../Components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice] = useState(1000);
  const [sort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://media.istockphoto.com/id/1224640603/photo/owners-of-local-restaurant-taking-orders-on-the-phone-and-boxing-food-for-delivery-during.jpg?b=1&s=170667a&w=0&k=20&c=pJuSTHP2t0yeaGoJB1RWTUK3ZYhd4XvPJcfsWH1_oGQ=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  );       
};
export default Products;