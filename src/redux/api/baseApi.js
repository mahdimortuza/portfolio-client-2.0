import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({
    getTechnologies: builder.query({
      query: () => `/technology`,
    }),
  }),
}) 

export const { useGetTechnologiesQuery } = baseApi

// export const { useGetPokemonByNameQuery, useget } = baseApi