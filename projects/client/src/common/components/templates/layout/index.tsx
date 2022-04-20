import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {ToastContainer} from "react-toastify"

import Navbar from "../../organisms/navbar";
import Aside from "../../molecules/aside";
import logo from "../../../assets/logo.svg"

import { RootState } from "../../../../app/redux/store";
import { selectUser } from "../../../../pages/login/loginSlice";

import 'react-toastify/dist/ReactToastify.css';

interface layoutProps {
    children?: React.ReactNode
}

export default function MainLayout({ children }: layoutProps): JSX.Element {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const user = useSelector((state: RootState) => state.login.user)

    useEffect(() => {
        dispatch(selectUser())
    },[dispatch])

    return (
        <React.Fragment>
            <Navbar logo={logo} onClick={() => setIsOpen(!isOpen)} user={user}></Navbar>
            <Aside isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} user={user}></Aside>
            <Outlet></Outlet>
            <ToastContainer
                position="top-right"
                theme="colored"
                autoClose={5000}
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