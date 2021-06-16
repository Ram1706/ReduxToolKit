import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  favproducts: []
};
const favProducts = createSlice({
  name: "favProducts",
  initialState: initialState,
  reducers: {
    addAllProducts: (state, action) => {
      const allproducts = [];
      action.payload.items.map((product) => {
        allproducts.push(product);
        return product;
      });
      state.products = allproducts;
    },
    addfavouiteFoods: (state, action) => {
      state.favproducts.push({
        name: action.payload.name,
        price: action.payload.price,
        id: action.payload.id
      });
    },
    removeFavourite: (state, action) => {
      state.favproducts = state.favproducts.filter(
        (product) => product.id !== action.payload.id
      );
    }
  }
});

export const favProductsAction = favProducts.actions;
export default favProducts;
