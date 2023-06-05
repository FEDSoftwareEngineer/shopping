import React from "react";
import style from "../styles/Hero.module.css";
import useProgressiveImg from "../CustomHooks/useProgressiveImg";

//images
import bg from "../images/HeroBg.webp";
import LQbg from "../images/lowq/LQHeroBg.webp";

export default function Hero() {
  const [src, { blur }] = useProgressiveImg(LQbg, bg);
  return (
    <div className={style.hero}>
      <div className={style.heroImg}>
        <img
          src={src}
          style={{
            filter: blur ? "blur(10px)" : "",
            transition: "0.5s ease-out",
          }}
          alt="hero-bg"
        />
      </div>

      <h1 className={style.title}>E-Store</h1>
      <h2 className={style.des}>
        Discover awesome products that suits your needs
      </h2>
    </div>
  );
}
