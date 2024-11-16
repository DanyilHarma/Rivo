import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1338/api/" }),
    endpoints: (builder) => ({
        getHomepageData: builder.query({
            query: () => "about-data?populate=categories"
        }),
        getProjectsData: builder.query({
            query: () => "about-data?populate[rivo_projects][populate]=Content"
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
        }),
        getExpertiseData: builder.query({
            query: () => "expertises?populate=expertiseData"
        }),
        getFooterImagesData: builder.query({
            query: () => "images-footers?populate=positions"
        })
    }),

})

export const { useGetHomepageDataQuery, useGetProjectsDataQuery, useSendContactsFormMutation, useGetContactsFormDataQuery, useGetExpertiseDataQuery,
    useGetFooterImagesDataQuery } = apiSlice;