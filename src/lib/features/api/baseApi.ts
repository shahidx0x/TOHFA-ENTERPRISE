import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getApiUrl } from "@/helpers/getApiUrl";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: getApiUrl() || "",
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["user", "user-list", "products"],
});
