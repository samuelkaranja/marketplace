import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../types";

interface PaginatedResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    // Paginated fetch
    getProducts: builder.query<
      PaginatedResponse,
      { limit: number; skip: number }
    >({
      query: ({ limit, skip }) => `products?limit=${limit}&skip=${skip}`,
    }),

    // 🆕 Fetch products by category
    getProductsByCategory: builder.query<
      PaginatedResponse,
      { category: string; limit: number; skip: number }
    >({
      query: ({ category, limit, skip }) =>
        `products/category/${category}?limit=${limit}&skip=${skip}`,
    }),

    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
} = productsApi;
