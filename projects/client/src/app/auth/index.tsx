import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Login from "../../pages/login/index"
import { selectUser } from "../../pages/login/loginSlice"
import { RootState } from "../redux/store"

interface routeProps {
    children: React.ReactNode
}

export default function RequireAuth({ children }: routeProps): JSX.Element {
    const dispatch = useDispatch()

    const user = useSelector((state: RootState) => state.login.user)

    useEffect(() => {
        dispatch(selectUser(localStorage.getItem('user')))
    },[dispatch])

    return (
        <React.Fragment>
            {user !== null ? children : <Login></Login>}
        </React.Fragment>
    )
}