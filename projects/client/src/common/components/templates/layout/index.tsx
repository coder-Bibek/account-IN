import React, { useState } from "react";

import Navbar from "../../organisms/navbar";
import Aside from "../../molecules/aside";
import logo from "../../../assets/logo.svg"
import { Outlet } from "react-router";

interface layoutProps {
    children?: React.ReactNode
}

export default function MainLayout({ children }: layoutProps): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <React.Fragment>
            <Navbar logo={logo} onClick={() => setIsOpen(!isOpen)}></Navbar>
            <Aside isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}></Aside>
            <Outlet></Outlet>
        </React.Fragment>
    );

}