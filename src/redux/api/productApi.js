import { baseApi } from "./baseApi";

const TechnologyApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createTechnology: build.mutation({
          query: (data) => ({
            url: "/technology/create-technology",
            method: "POST",
            data,
          }), 
        }),
      }),
})
export const {useCreateTechnologyMutation} = TechnologyApi