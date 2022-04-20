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
        dispatch(selectUser())
    },[dispatch])

    return (
        <React.Fragment>
            {user !== "" ? children : <Login></Login>}
        </React.Fragment>
    )
}