import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import formDataReducer from "./reducers/formDataReducer";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        formData: formDataReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)


});

window.store = store;