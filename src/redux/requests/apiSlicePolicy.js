import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlicePolicy = createApi({
    reducerPath: "privacyApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1338/api/" }),
    endpoints: (builder) => ({
        getPolicyData: builder.query({
            query: () => "privacy-policy-datas?populate=sections"
        })
    }),
})

export const { useGetPolicyDataQuery } = apiSlicePolicy;