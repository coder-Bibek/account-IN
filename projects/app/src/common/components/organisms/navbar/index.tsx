import React from "react"
import styles from "./index.module.css"

import { HarmBurgerIcon } from "../../atoms/HarmBurger"
import { Link } from "react-router-dom"
import LoginButton from "../../atoms/LoginButton"

interface navbarProps {
    logo: string
    onClick: () => void
    user: Array<object>
}

export default function Navbar({ logo, onClick, user }: navbarProps): JSX.Element {

    return (
        <React.Fragment>
            <header>
                <article className={styles.article}>
                    <section className={styles.container}>
                        <section className={styles.logoContainer}>
                            <img src={logo} alt="logo" className={styles.logo}></img>
                        </section>
                        <section className={styles.iconContainer} onClick={onClick} >
                            <HarmBurgerIcon></HarmBurgerIcon>
                        </section>
                        <nav className={styles.nav}>
                            <ul className={styles.list}>
                                <Link to="/" ><li>Home</li></Link>
                                <Link to="/investments">  <li>Investments</li></Link>
                                <Link to="/accounts"><li>Accounts</li></Link>
                                {user.length === 0 ?
                                    <Link to="/login" className={styles.loginButtonContainer}><li><LoginButton></LoginButton></li></Link> :
                                    <Link to="/profile"><li>Profile</li></Link>
                                }
                            </ul>
                        </nav>
                    </section>
                </article>
            </header>
        </React.Fragment>
    )
}