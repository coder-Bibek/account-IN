import React from "react"
import { useSelector } from "react-redux"

import Login from "../../pages/login/index"
import { RootState } from "../redux/store"

interface routeProps {
    children: React.ReactNode
}

export default function RequireAuth({ children }: routeProps): JSX.Element {
    const user = useSelector((state: RootState) => state.login.user)

    return (
        <React.Fragment>
            {user.email !== "" ? children : <Login></Login>}
        </React.Fragment>
    )
}