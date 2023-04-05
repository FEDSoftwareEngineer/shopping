import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "../styles/Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/CartSlice";
import data from "../data";
import Loading from "../components/Loading";
import useProgressiveImg from "../CustomHooks/useProgressiveImg";
import loadingImg from "../images/loading.webp";

export default function Details() {
  const cartData = useSelector((state) => state.cart.cartData);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const [isCart, setIsCart] = useState(false);

  useEffect(() => {
    if (cartData.find((item) => item.id === productId)) {
      setIsCart(true);
    }
  }, [cartData, productId]);

  useEffect(() => {
    if (productId !== undefined)
      setProduct(data.find((item) => item.id === productId));
  }, [productId]);
  const [src] = useProgressiveImg(loadingImg, product ? product.img : "");
  if (product === undefined)
    return (
      <div className="detailsLoading">
        <Loading />
      </div>
    );
  return (
    <div className={style.details}>
      <div className={style.product}>
        <img height={400} src={src} alt={product.name} />
        <div className={style.info}>
          <h1>{product.name}</h1>
          <p>{product.info}</p>

          <div className="inRow">
            <p className="gray">Price:</p>
            <p className={style.price}> {product.price}$</p>
          </div>
          <div className="inRow">
            <p className="gray">Type:</p>
            <p className={style.type}>{product.type}</p>
          </div>
        </div>
      </div>
      <div className={style.buycard}>
        <div className={style.buyDetails}>
          <h1>{product.name}</h1>
          <p>{product.type}</p>
        </div>
        <div className={style.cards}>
          <div className={style.priceCard}>{product.price}$</div>
          <Link
            to={`${isCart ? "/cart" : ""}`}
            className={`${style.buyBtn} ${isCart ? style.inCart : ""}`}
            onClick={() => {
              dispatch(addItem(product.id));
            }}
          >
            {isCart ? "In cart" : "Add to cart"}
          </Link>
        </div>
      </div>
    </div>
  );
}
