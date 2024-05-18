import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBlogs: builder.query({
            query: () => ({
                url: `/blog`, 
                method: "GEt"
            })
        }), 
        getSingleBlog: builder.query({
            query: (id) => ({
                url: `/blog/${id}`, 
                method:"GET"
            })
        })
    })
})
export const {useGetAllBlogsQuery, useGetSingleBlogQuery} = blogApi

 