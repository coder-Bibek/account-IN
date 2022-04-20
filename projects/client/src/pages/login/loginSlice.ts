import { createSlice } from "@reduxjs/toolkit";

export interface loginType {
    user: string
}

const initialState: loginType = {
    user:''
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
            state.user = localStorage.getItem("user") || "" ;
        },

    },
});

export const { addUser, selectUser } = loginSlice.actions

export default loginSlice.reducer;
