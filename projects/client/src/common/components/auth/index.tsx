import React, { useRef } from "react"

import Login from "../../../pages/login/index"

interface routeProps {
    children: React.ReactNode
}

export default function RequireAuth({ children }: routeProps): JSX.Element {
    const user = useRef(localStorage.getItem("user"))

    return (
        <React.Fragment>
            {user.current !== null ? children : <Login></Login>}
        </React.Fragment>
    )
}