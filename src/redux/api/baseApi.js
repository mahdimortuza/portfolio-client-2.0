import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'api',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://portfolio-2-0-server-tau.vercel.app/api/v1' }),
  endpoints: ( ) => ({ }),
}) 
 