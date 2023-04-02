import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialState = {
  cartData: [],
  data,
  total: 0,
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = state.data.find((item) => item.id === action.payload);
      if (!state.cartData.find((item) => item.id === product.id)) {
        state.cartData = [...state.cartData, product];
        state.count += 1;
        state.total += product.price;
      }
    },
    deleteItem: (state, action) => {
      const product = state.data.find((item) => item.id === action.payload);
      const newList = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      state.cartData = newList;
      state.count -= 1;
      state.total -= product.price;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, deleteItem } = cartSlice.actions;
