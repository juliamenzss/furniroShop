// src/store/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};
export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { productId, productSkuId, quantity } = action.payload;
      const itemInCart = state.cart.find(
        (item) => item.productId === productId && item.productSkuId === productSkuId
      );
    
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity  });
      }
    },

    updateQuantity: (state, action) => {
      const { productSkuId, amount } = action.payload;
      const item = state.cart.find(
        (item) => item.productSkuId === productSkuId
      );

      if (!item) {
        return;
      }

      item.quantity += amount;
      if (item.quantity < 1) {
        item.quantity = 1;
      }
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter(item => item.productSkuId !== action.payload);

    },
  },
  clearCart: (state) => {
    state.cart = [];
  },
});

export const { addProduct, updateQuantity, removeProduct, clearCart } = cartReducer.actions;
export default cartReducer.reducer;

