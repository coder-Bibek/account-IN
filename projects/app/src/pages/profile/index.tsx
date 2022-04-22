import { useAppSelector } from "../../app/redux/hooks";
import LogoutButton from "../../common/components/atoms/LogoutButton";
import Page from "../../common/components/templates/page";
import { selectUser } from "../login/loginSlice";

import styles from "./index.module.css"

export default function Profile(): JSX.Element {
    const {user} = useAppSelector(selectUser)

    return (
        <Page>
            <h1>Profile</h1>
            <p>Welcome, {user?.email}</p>

            <section className={styles.logoutButtonContainer}>
                <LogoutButton></LogoutButton>
            </section>
        </Page>
    )
}