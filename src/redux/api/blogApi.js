import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBlogs: builder.query({
            query: () => `/blog`
        })
    })
})
export const {useGetAllBlogsQuery} = blogApi