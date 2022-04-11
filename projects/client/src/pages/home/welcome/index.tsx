import { useState } from "react"
import { Link } from "react-router-dom"
import LoginButton from "../../../common/components/atoms/LoginButton"

import styles from "./index.module.css"

export default function Welcome(): JSX.Element {
    const [user] = useState<boolean>(true)

    return (
        <section className={styles.homeContainer}>
            <p className={styles.appParagraph}>New App</p>
            <h1>Welcome to Account-IN</h1>
            <p className={styles.description}>When it comes to accounts, Go <strong>Account-IN</strong></p>
            {user ?
                <Link to="/login" className={styles.loginButtonContainer}><LoginButton></LoginButton></Link> :
                <Link to="/accounts" className={styles.startedButtonContainer}> <button className={styles.startedButton}>GET STARTED</button></Link>}
        </section>
    )
}