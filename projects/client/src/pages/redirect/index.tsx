import styles from "./index.module.css"
import { Link } from "react-router-dom"

import Error from "../../common/assets/error.png"

export default function Redirect(): JSX.Element {
    return (
        <section className={styles.redirectContainer}>
            <section className={styles.imageContainer}>
                <img src={Error} alt="error-page" className={styles.errorImage}></img>
                <Link to="/"> <button className={styles.homeButton}>Home</button></Link>
            </section>
        </section>
    )
}