import "./index.css";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.svg";
import { CloseIcon } from "../../atoms/CloseIcon";
import LoginButton from "../../atoms/LoginButton";

interface asideProps {
    isOpen: boolean
    onClick: () => void
}

export default function Aside({ isOpen, onClick }: asideProps): JSX.Element {
    return (
        <aside className="aside" data-aside={isOpen ? "open" : "close"} onClick={onClick}>
            <section className="asideContainer">
                <section className="asideLogoContainer">
                    <img src={logo} alt="logo" className="asideLogo"></img>
                    <section className="asideIconContainer">
                        <CloseIcon></CloseIcon>
                    </section>
                </section>
                <nav className="asideNav">
                    <ul className="asideList">
                        <Link to="/" ><li>Home</li></Link>
                        <Link to="/investments"><li>Investments</li></Link>
                        <Link to="/accounts"><li>Accounts</li></Link>
                        <Link to="/login" className="loginButtonContainer"><li><LoginButton></LoginButton></li></Link>
                    </ul>
                </nav>
            </section>
        </aside >
    )
}