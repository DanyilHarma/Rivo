import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSliceProjects = createApi({
    reducerPath: "projectsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1338/api/" }),
    endpoints: (builder) => ({
        getProjectsData: builder.query({
            query: () => "http://localhost:1338/api/rivo-projects?[populate][Content][populate]&[populate][sections][populate]=*&[populate][expertise][populate]=*"
        })
    }),
})

export const { useGetProjectsDataQuery } = apiSliceProjects;