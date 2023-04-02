import React, { useState } from "react";
import style from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const count = useSelector((state) => state.cart.count);
  const [isPhone, setIsPhone] = useState(false);
  return (
    <>
      <div className={style.navbar}>
        <div className={style.navbarLogo}>
          <Link to="/">
            <h1>Shopping App</h1>
          </Link>
        </div>
        <FaBars
          onClick={() => setIsPhone(!isPhone)}
          className={style.navbarPhone}
        />

        <div className={`${style.navbarItems} ${!isPhone ? style.on : ""}`}>
          <FaTimes className={style.close} onClick={() => setIsPhone(false)} />
          <Link to="/" onClick={() => setIsPhone(false)}>
            <h1>Home</h1>
          </Link>
          <Link to="/about" onClick={() => setIsPhone(false)}>
            <h1>About</h1>
          </Link>

          <Link
            to="/cart"
            className={style.cartIcon}
            onClick={() => setIsPhone(false)}
          >
            <FaShoppingCart className={style.cartIcon} />
            <div className={style.cartCount}>{count}</div>
          </Link>
        </div>
      </div>
      <div className={style.spac}></div>
    </>
  );
}
