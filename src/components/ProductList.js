import React from "react";
import SingleProduct from "./SingleProduct";
import style from "../styles/ProductList.module.css";
import Loading from "./Loading";

export default function ProductList({ type, data }) {
  if (data === undefined) return <Loading />;
  return (
    <div className={style.productList}>
      <h1 className={style.title}>{type}</h1>
      {data.map((item) => {
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
