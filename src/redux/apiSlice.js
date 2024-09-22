import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1338/api/" }),
    endpoints: (builder) => ({
        getHomepageData: builder.query({
            query: () => "about-data"
        }),
        getProjectsData: builder.query({
            query: () => "about-data?populate[rivo_projects][populate]=projectsData"
        })
    }),

})

export const { useGetHomepageDataQuery, useGetProjectsDataQuery } = apiSlice;