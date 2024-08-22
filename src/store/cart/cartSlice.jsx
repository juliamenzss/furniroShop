// src/store/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quantityItems: 0,
  teste: 'felipe',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.quantityItems += 1;
    },
    decrement: (state) => {
      state.quantityItems -= 1;
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
