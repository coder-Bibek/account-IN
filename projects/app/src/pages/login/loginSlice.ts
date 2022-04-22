import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/redux/store";

type user = {
    email: string,
    password: string
}

export interface loginType {
    user: user | null
}

const initialState: loginType = {
    user: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user') || '{}'),
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { email, password } = action.payload

            if (process.env.REACT_APP_EMAIL === email && process.env.REACT_APP_PASSWORD === password) {
                localStorage.setItem('user', JSON.stringify(action.payload))

                state.user = action.payload
            }
        },

        fetchUser: (state) => {
            state.user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user') || '{}')
        },

        removeUser: () => {
            localStorage.clear()
        }

    },
});

export const { addUser, fetchUser, removeUser } = loginSlice.actions

export const selectUser = (state: RootState): loginType => state.login

export default loginSlice.reducer;
