import React from "react"

import Login from "../../pages/login/index"
import { useAppSelector } from "../redux/hooks"

interface routeProps {
    children: React.ReactNode
}

export default function RequireAuth({ children }: routeProps): JSX.Element {
    const user = useAppSelector(state=>state.login)

    return (
        <React.Fragment>
            {user.email !== '' ? children : <Login></Login>}
        </React.Fragment>
    )
}