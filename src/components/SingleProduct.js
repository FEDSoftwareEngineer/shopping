import React from "react";
import style from "../styles/SingleProduct.module.css";
import useProgressiveImg from "../CustomHooks/useProgressiveImg";
import loadingImg from "../images/loading.webp";
import { Link } from "react-router-dom";
export default function SingleProduct({ img, name, type, price, id }) {
  const [src] = useProgressiveImg(loadingImg, img);
  return (
    <Link to={`/details/${id}`} className={style.product}>
      <div className={style.productImg}>
        <img alt={name} height={200} src={src} />
      </div>
      <div className={style.info}>
        <h1>{name}</h1>
        <p>{type}</p>
      </div>

      <p className={style.price}>{price}$</p>
    </Link>
  );
}
