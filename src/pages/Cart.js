import React, { useEffect, useState } from "react";
import style from "../styles/Cart.module.css";
import { deleteItem } from "../features/cart/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.cartData);
  const total = useSelector((state) => state.cart.total);
  const count = useSelector((state) => state.cart.count);
  const [amount, setAmount] = useState();

  window.addEventListener("resize", () => {
    if (window.innerWidth < 700) setAmount(68);
    else setAmount(200);
  });
  useEffect(() => {
    if (window.innerWidth < 700) setAmount(68);
    else setAmount(200);
  }, []);

  if (data.length < 1) {
    return (
      <div className={style.emptyCart}>
        <h1>Your cart is currently empty</h1>
      </div>
    );
  }
  return (
    <div className={style.shopping}>
      <div className="container">
        <div className="space-2"></div>
        <div className={style.shoppingCart}>
          <div className={style.shoppingTitle}>
            <h3>Shopping Cart</h3>
            <p>price</p>
          </div>

          <hr />
          {data.map((item) => {
            return (
              <div key={item.name}>
                <div className={style.card}>
                  <div className={style.cartImg}>
                    <img src={item.img} alt={item.name} />
                  </div>

                  <div className={style.details}>
                    <p className={style.description}>
                      <b className="title">{item.name}</b>
                      {item.info.substring(0, amount)}...
                    </p>
                    <span className={style.stock}>in Stock</span>
                    <p className={style.type}>
                      <b> type: </b>
                      {item.type}
                    </p>
                    <div className={style.action}>
                      <p
                        onClick={() => {
                          dispatch(deleteItem(item.id));
                        }}
                      >
                        Delete
                      </p>
                      <span className="verticalHr"></span>
                      <Link to={`/details/${item.id}`}>Check details</Link>
                    </div>
                  </div>
                  <div className={style.price}>{item.price}$</div>
                </div>
                <hr />
                <div className="space"></div>
              </div>
            );
          })}

          <div className={style.proceed}>
            <h2>Subtotal of {count} items</h2>
            <h3>{total}$</h3>
            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
