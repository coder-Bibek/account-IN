import { createSlice } from "@reduxjs/toolkit";

export interface loginType {
    user: {
        email: string
        password: string
    } 
}

const initialState: loginType = {
    user: {
        email: '',
        password: ''
    }
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        addUser: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload))

            state.user = action.payload
        },

        selectUser: (state) => {
            state.user = JSON.parse(localStorage.getItem('user') || "")
        }

    },
});

export const { addUser, selectUser } = loginSlice.actions

export default loginSlice.reducer;
