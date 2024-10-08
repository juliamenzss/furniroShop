import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productSlice from "./Product/productSlice";
import productIdSlice from "./Product/productIdSlice";
import URLSlice from "./URL/urlSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productSlice,
    URL: URLSlice,
    id: productIdSlice,
  },
});

