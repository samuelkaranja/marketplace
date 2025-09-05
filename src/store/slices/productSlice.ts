import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Product } from "../types";

interface ProductState {
  product: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: [],
  selectedProduct: null,
  loading: true,
  error: null,
};

// Fetching Products
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    // Fetching products from a dummy API
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    console.log("Fetched products:", data.products); // Log the fetched products
    return data; // Ensure the data is typed correctly
  }
);

// Fetch Product by ID
export const fetchProductById = createAsyncThunk(
  "product/fetchProductByID",
  async (id: string) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    const data = await response.json();
    return data as Product;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.product = action.payload.products; // Assuming the API returns an object with a 'products' array
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      })

      // Single product
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch product details";
      });
  },
});

export const { clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
