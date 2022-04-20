import React from "react"

import Login from "../../../pages/login/index"

interface routeProps {
    children: React.ReactNode
}

export default function RequireAuth({ children }: routeProps): JSX.Element {
    const user = localStorage.getItem("user")

    return (
        <React.Fragment>
            {user !== null ? children : <Login></Login>}
        </React.Fragment>
    )
}