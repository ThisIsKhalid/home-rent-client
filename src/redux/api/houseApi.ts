import { baseApi } from "./baseApi";
const HOUSE_API = "houses";

export const houseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHouses: builder.query({
      query: (arg: Record<string, any>) => ({
        url: HOUSE_API,
        method: "GET",
        params: arg,
      }),
    }),
  }),
});

export const { useGetHousesQuery } = houseApi;