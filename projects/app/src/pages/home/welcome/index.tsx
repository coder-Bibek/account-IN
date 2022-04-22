import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks"

import LoginButton from "../../../common/components/atoms/LoginButton"
import { fetchUser, selectUser } from "../../login/loginSlice"

import styles from "./index.module.css"

export default function Welcome(): JSX.Element {
    const { user } = useAppSelector(selectUser)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    },[dispatch])

    return (
        <section className={styles.homeContainer}>
            <p className={styles.appParagraph}>New App</p>
            <h1>Welcome to Account-IN</h1>
            <p className={styles.description}>When it comes to accounts, Go <strong>Account-IN</strong></p>
            {user !== null ?
                <Link to="/accounts" className={styles.startedButtonContainer}> <button className={styles.startedButton}>GET STARTED</button></Link> :
                <Link to="/login" className={styles.loginButtonContainer}><LoginButton></LoginButton></Link>
            }
        </section>
    )
}