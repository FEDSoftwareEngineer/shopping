import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/CartSlice";
const store = configureStore({ reducer: { cart: CartSlice } });
export default store;
