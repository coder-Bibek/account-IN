import { Action, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { Dispatch } from "react"
import config from "../../app/config"

export interface loginProps {
    users: Array<object>
    email: string
    password: string
    loading: boolean
}

export const initialState: loginProps = {
    users: [],
    email: '',
    password: '',
    loading: true
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        fetchUsers: (state, action) => {
            state.users = action.payload
        },

        addUsers: (state, action) => {
            state.users.push(action.payload)
        }
    }
})

export const fetchUsersAsync = () => async (dispatch: Dispatch<Action>) => {
    try {
        const response = await axios.get(`${config.url}/${config.version}/api/users`);
        dispatch(fetchUsers(response.data));

    } catch (err) {
        throw err
    }
}

export const { addUsers, fetchUsers } = loginSlice.actions

export default loginSlice.reducer;