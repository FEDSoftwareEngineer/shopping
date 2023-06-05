import { lazy } from "react";

//components
import Hero from "../components/Hero";

//lazy loading imports
const Products = lazy(() => import("../components/Products"));

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
    </>
  );
}
