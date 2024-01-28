import { baseApi } from "./baseApi";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userList: build.query({
      query: (param) => {
        return {
          url: "/users/fetch-all",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
  }),
});

export const { useUserListQuery } = usersApi;
