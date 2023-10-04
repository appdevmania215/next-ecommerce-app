import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "@/services/productService";

const initialState = {
  products: [],
  product: null,
  status: "idle",
  error: null,
};

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (productId: string, { rejectWithValue }) => {
    try {
      const product = await fetchProduct(productId);
      return product;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.payload;
      });
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
