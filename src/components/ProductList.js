import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import style from "../styles/ProductList.module.css";
import { useSelector } from "react-redux";
import Loading from "./Loading";

export default function ProductList({ type }) {
  const data = useSelector((state) => state.cart.data);
  const [newData, setNewData] = useState();
  useEffect(() => {
    if (type !== "All") setNewData(data.filter((item) => item.type === type));
    else {
      setNewData(data);
    }
  }, [type]);
  if (newData === undefined) return <Loading />;
  return (
    <div className={style.productList}>
      <h1 className={style.title}>{type}</h1>
      {newData.map((item) => {
        return (
          <SingleProduct
            key={item.name}
            name={item.name}
            type={item.type}
            price={item.price}
            img={item.img}
            id={item.id}
          />
        );
      })}
    </div>
  );
}
