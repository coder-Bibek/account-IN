import React, { useState } from "react"

import Login from "../../../pages/login/index"

interface routeProps {
    children: React.ReactNode
}

export default function RequireAuth({ children }: routeProps): JSX.Element {
    const [user] = useState<boolean>(false)

    return (
        <React.Fragment>
            {user ? children : <Login></Login>}
        </React.Fragment>
    )
}