import React, { useState } from "react";
import style from "../styles/Products.module.css";
import ProductList from "./ProductList";

export default function Products() {
  const [current, setCurrent] = useState("All");
  return (
    <div className={style.products}>
      <div className={style.types}>
        <button
          onClick={() => setCurrent("All")}
          style={{
            backgroundColor: current === "All" ? "#00ffc2" : "white",
            boxShadow: current === "All" ? "0 1px 2px 0 black" : "none",
          }}
        >
          All
        </button>
        <button
          onClick={() => setCurrent("PC")}
          style={{
            backgroundColor: current === "PC" ? "#00ffc2" : "white",
            boxShadow: current === "PC" ? "0 1px 2px 0 black" : "none",
          }}
        >
          PC Parts
        </button>
        <button
          onClick={() => setCurrent("Clothes")}
          style={{
            backgroundColor: current === "Clothes" ? "#00ffc2" : "white",
            boxShadow: current === "Clothes" ? "0 1px 2px 0 black" : "none",
          }}
        >
          Clothes
        </button>
        <button
          onClick={() => setCurrent("Jewelry")}
          style={{
            backgroundColor: current === "Jewelry" ? "#00ffc2" : "white",
            boxShadow: current === "Jewelry" ? "0 1px 2px 0 black" : "none",
          }}
        >
          Jewelery
        </button>
        <button
          onClick={() => setCurrent("Phones")}
          style={{
            backgroundColor: current === "Phones" ? "#00ffc2" : "white",
            boxShadow: current === "Phones" ? "0 1px 2px 0 black" : "none",
          }}
        >
          Phones
        </button>
      </div>
      <ProductList type={current} />
    </div>
  );
}
