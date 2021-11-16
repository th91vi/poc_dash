import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../../mock/4bio.json";

const items = mockData.channel.item;

const initialState = {
  sku: "",
  title: "",
  description: "",
  price: "",
  link: "",
  imageSource: "",
  manufacturer: "",
  activeIngredient: "",
  availability: "",
  productList: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    SEARCH_SKU: (state, { payload: { skuValue } }) => {
      if (!items[0].hasOwnProperty(skuValue)) return;

      const foundSkus = items.map((item) => ({
        sku: item[skuValue],
      }));

      state.sku = skuValue;
      state.productList = foundSkus;
    },
  },
});

export const { SEARCH_SKU } = productSlice.actions;

export default productSlice.reducer;
