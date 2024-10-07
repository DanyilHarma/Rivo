import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSliceVacancies = createApi({
    reducerPath: "vacanciesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1338/api/" }),
    endpoints: (builder) => ({
        getCareerPageData: builder.query({
            query: () => "career-page?populate[vacancies][populate][vacancies][populate]"
        })
    })
})

export const { useGetCareerPageDataQuery } = apiSliceVacancies;