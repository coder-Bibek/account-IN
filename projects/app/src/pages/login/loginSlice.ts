import { createSlice } from "@reduxjs/toolkit"

export interface loginProps {
    email: string
    password: string
}

export const initialState: loginProps = {
    email: '',
    password: ''
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {}
})

export default loginSlice.reducer;