import { Link } from "react-router-dom"

import Page from "../../common/components/templates/page"
import styles from "./index.module.css"

export default function Home(): JSX.Element {
    return (
        <Page>
            <section className={styles.homeContainer}>
                <p className={styles.appParagraph}>New App</p>
                <h1>Welcome to Account-IN</h1>
                <p className={styles.description}>When it comes to accounts, Go <strong>Account-IN</strong></p>
                <Link to="/login"> <button className={styles.loginButton}>LOGIN</button></Link>
            </section>
        </Page>
    )
}