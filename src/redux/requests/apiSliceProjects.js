import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSliceProjects = createApi({
    reducerPath: "projectsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1338/api/" }),
    endpoints: (builder) => ({
        getProjectsData: builder.query({
            query: () => "rivo-projects?populate[projectsData][populate][expertise][populate]=expertiseData&populate[projectsData][populate][stack][populate]&populate[projectsData][populate][sections][populate][content][populate]=*"
        })
    }),
})

export const { useGetProjectsDataQuery } = apiSliceProjects;