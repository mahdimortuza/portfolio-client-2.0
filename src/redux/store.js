import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { baseApi } from './api/baseApi'

export const store = configureStore({
  reducer: { 
    [baseApi.reducerPath]: baseApi.reducer,
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

 