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
      if (!items[0].hasOwnProperty(skuValue)) return;

      const foundSkus = items.map((item) => ({
        sku: item[skuValue],
      }));

      state.sku = skuValue;
      state.productList = foundSkus;
    },
    SEARCH_PROPERTY: (state, { payload: { fieldName, propertyName } }) => {
      console.log(fieldName, propertyName);
      if (!items[0].hasOwnProperty(propertyName)) return;

      const productListCopy = [...state.productList];

      const newProductsList = productListCopy.map((product, index) => {
        if (!product.hasOwnProperty(propertyName)) {
          const newProductData = {
            ...product,
            [propertyName]: items[index][propertyName],
          };

          return newProductData;
        } else {
          return product;
        }
      });

      state[fieldName] = propertyName;
      state.productList = newProductsList;
    },
  },
});

export const { SEARCH_SKU, SEARCH_PROPERTY } = productSlice.actions;

export default productSlice.reducer;
