import { Action, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { Dispatch } from "react"
import config from "../../app/config"

type user = {
    email: string,
    password: string
}

export interface loginProps {
    users: Array<object>
    loading: boolean
}

export const initialState: loginProps = {
    users: [],
    loading: true
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        fetchUsers: (state, action) => {
            if (action.payload.status) {
                state.users = action.payload.data
                state.loading = false
            }
        },

        addUsers: (state, action) => {
            state.loading = !action.payload.status
        },

        removeUser: (state, action) => {
            if (action.payload.status) {
                state.loading = true
                state.users = action.payload
            }
        }
    }
})

export const fetchUsersAsync = () => async (dispatch: Dispatch<Action>) => {
    try {
        const email = localStorage.getItem('email')

        const token = localStorage.getItem('user_token')

        const response = await axios.get(`${config.url}/${config.version}/api/users/${email}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        dispatch(fetchUsers(response.data))

    } catch (err) {
        console.error(err)
    }
}

export const addUsersAsync = (data: user) => async (dispatch: Dispatch<Action>) => {
    try {
        const response = await axios.post(`${config.url}/${config.version}/api/users`, data);
        dispatch(addUsers(response.data));

        if (response.data.status) {
            localStorage.setItem('email', data.email)

            localStorage.setItem('user_token', response.data.auth_token)
        }

    } catch (err) {
        console.error(err)
    }
}

export const removeUserAsync = () => async (dispatch: Dispatch<Action>) => {
    try {
        const email = localStorage.getItem('email')

        const token = localStorage.getItem('user_token')

        const response = await axios.put(`${config.url}/${config.version}/api/users`, {email}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        dispatch(removeUser(response.data))
    } catch (err) {
        console.error(err)
    }
}

export const { addUsers, fetchUsers, removeUser } = loginSlice.actions

export default loginSlice.reducer;