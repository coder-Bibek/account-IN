import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { RootState } from "../../../app/redux/store"
import LoginButton from "../../../common/components/atoms/LoginButton"
import { selectUser } from "../../login/loginSlice"

import styles from "./index.module.css"

export default function Welcome(): JSX.Element {
    const user = useSelector((state: RootState) => state.login.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(selectUser())
    }, [dispatch])

    return (
        <section className={styles.homeContainer}>
            <p className={styles.appParagraph}>New App</p>
            <h1>Welcome to Account-IN</h1>
            <p className={styles.description}>When it comes to accounts, Go <strong>Account-IN</strong></p>
            {user !== "" ?
                <Link to="/accounts" className={styles.startedButtonContainer}> <button className={styles.startedButton}>GET STARTED</button></Link> :
                <Link to="/login" className={styles.loginButtonContainer}><LoginButton></LoginButton></Link>
            }
        </section>
    )
}