import { configureStore } from "@reduxjs/toolkit";

import currencyInfoReducer from "./reducers/currencyInfoSlice";
import productReducer from "./reducers/productSlice";

export const store = configureStore({
  reducer: {
    currencyInfo: currencyInfoReducer,
    product: productReducer,
  },
});
