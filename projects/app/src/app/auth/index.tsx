import React from "react"

import Login from "../../pages/login/index"
import { selectUser } from "../../pages/login/loginSlice"
import { useAppSelector } from "../redux/hooks"

interface routeProps {
    children: React.ReactNode
}

export default function RequireAuth({ children }: routeProps): JSX.Element {
    const {user} = useAppSelector(selectUser)

    return (
        <React.Fragment>
            {user !== null ? children : <Login></Login>}
        </React.Fragment>
    )
}