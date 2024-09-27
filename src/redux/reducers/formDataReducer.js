import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    formData: null
}

const formDataSlice = createSlice({
    name: "formData",
    initialState,
    reducers: {
        setFormData(state, action) {
            state.formData = action.payload
        },
        clearFormData(state) {
            state.formData = null
        }
    }
})

export const { setFormData, clearFormData } = formDataSlice.actions;

export default formDataSlice.reducer;