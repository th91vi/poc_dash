import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../../mock/4bio.json";

const items = mockData.channel.item;

const initialState = {
  sku: "",
  title: "",
  description: "",
  price: "",
  link: "",
  image_link: "",
  brand: "",
  activeIngredient: "",
  availability: "",
  productList: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    SEARCH_SKU: (state, { payload: { skuValue } }) => {
      const foundSkus = items.map((item) => ({
        sku: item[skuValue],
      }));

      state.sku = skuValue;
      state.productList = foundSkus;
    },
    SEARCH_PROPERTY: (state, { payload: { fieldName, propertyName } }) => {
      const productListCopy = [...state.productList];

      const newProductsList = productListCopy.map((product, index) => {
        const newProductData = {
          ...product,
          [fieldName]: items[index][propertyName],
        };

        return newProductData;
      });

      state[fieldName] = propertyName;
      state.productList = newProductsList;
    },
  },
});

export const { SEARCH_SKU, SEARCH_PROPERTY } = productSlice.actions;

export default productSlice.reducer;
