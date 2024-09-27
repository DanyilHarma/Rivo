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
        }),
        sendContactsForm: builder.mutation({
            query: (formData) => ({
                url: "contact-form",
                method: "PUT",
                body: { data: formData }
            })
        }),
        getContactsFormData: builder.query({
            query: () => "contact-form"
        })
    }),

})

export const { useGetHomepageDataQuery, useGetProjectsDataQuery, useSendContactsFormMutation, useGetContactsFormDataQuery } = apiSlice;