import { baseApi } from "./baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    productList: build.query({
      query: () => ({
        url: "/products/product-list",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    productCreate: build.mutation({
      query: (productData) => ({
        url: "/products/create-product",
        method: "POST",
        data: productData,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useProductListQuery, useProductCreateMutation } = productsApi;
