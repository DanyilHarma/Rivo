import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./requests/apiSlice.js";
import formDataReducer from "./reducers/formDataReducer";
import { apiSliceVacancies } from "./requests/apiSliceVacancies.js";
import { apiSlicePolicy } from "./requests/apiSlicePolicy.js";
import { apiSliceProjects } from "./requests/apiSliceProjects.js";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [apiSliceVacancies.reducerPath]: apiSliceVacancies.reducer,
        [apiSlicePolicy.reducerPath]: apiSlicePolicy.reducer,
        [apiSliceProjects.reducerPath]: apiSliceProjects.reducer,
        formData: formDataReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
            .concat(apiSliceVacancies.middleware)
            .concat(apiSlicePolicy.middleware)
            .concat(apiSliceProjects.middleware)
});

window.store = store;