import { baseApi } from "./baseApi";

const TechnologyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
    getTechnologies: builder.query({
      query: () => `/technology`,
    }),
      }),
})
export const {useGetTechnologiesQuery} = TechnologyApi