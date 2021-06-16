import { configureStore } from "@reduxjs/toolkit";
import favProducts from "./favouiteProducts-slice";
const store = configureStore({
  reducer: { favProductsItems: favProducts.reducer }
});

export default store;
