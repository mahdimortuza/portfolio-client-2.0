import { baseApi } from "./baseApi";

const projectApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProjects: builder.query({
            query: () => ({
                url: `/project`, 
                method: "GEt"
            })
        }), 
        getSingleProject: builder.query({
            query: (id) => ({
                url: `/project/${id}`, 
                method:"GET"
            })
        })
    })
})
export const { useGetAllProjectsQuery, useGetSingleProjectQuery} = projectApi

 