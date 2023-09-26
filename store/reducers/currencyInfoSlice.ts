import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "USD",
  rates: {},
};

export const currencyInfoSlice = createSlice({
  name: "currencyInfo",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setRates: (state, action) => {
      state.rates = action.payload;
    },
  },
});

export const { setRates, setCurrency } = currencyInfoSlice.actions;

export default currencyInfoSlice.reducer;
