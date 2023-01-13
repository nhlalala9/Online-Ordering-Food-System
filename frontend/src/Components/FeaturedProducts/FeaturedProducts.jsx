import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import { fetchData } from "../../utils/utils";

const FeaturedProducts = ({ type }) => {
  const [foods, setFood] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectFood = async () => {
      await fetchData(`/products?populate=*&[filters][type][$eq]=${type}`).then(
        (data) => {
          setFood(data);
          setLoading(false);
        }
      );
    };
    collectFood();
  }, []);
  if (loading) console.log("Loading");
  else console.log(foods);
  return (
    <div className="featuredProducts">
      {foods.data.map((food) => (
        <div key={food.id}>
          {loading
            ? "loading"
            : foods?.data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
