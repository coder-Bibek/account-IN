import React, { useState } from "react";

import Navbar from "../../organisms/navbar";
import Aside from "../../molecules/aside";
import logo from "../../../assets/logo.svg"
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/redux/store";

interface layoutProps {
    children?: React.ReactNode
}

export default function MainLayout({ children }: layoutProps): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const user = useSelector((state: RootState) => state.login.user)

    return (
        <React.Fragment>
            <Navbar logo={logo} onClick={() => setIsOpen(!isOpen)} user={user.email}></Navbar>
            <Aside isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} user={user.email}></Aside>
            <Outlet></Outlet>
        </React.Fragment>
    );

}