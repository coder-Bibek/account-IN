import React, { useState } from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify"

import Navbar from "../../organisms/navbar";
import Aside from "../../molecules/aside";
import logo from "../../../assets/logo.svg"

import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from "../../../../app/redux/hooks";
import { selectUser } from "../../../../pages/login/loginSlice";

interface layoutProps {
    children?: React.ReactNode
}

export default function MainLayout({ children }: layoutProps): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { user } = useAppSelector(selectUser)

    return (
        <React.Fragment>
            <Navbar logo={logo} onClick={() => setIsOpen(!isOpen)} user={user}></Navbar>
            <Aside isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} user={user}></Aside>
            <Outlet></Outlet>
            <ToastContainer
                position="top-right"
                theme="colored"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            ></ToastContainer>
        </React.Fragment>
    );

}