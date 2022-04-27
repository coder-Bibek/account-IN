import { useAppSelector } from "../../app/redux/hooks";
import LogoutButton from "../../common/components/atoms/LogoutButton";
import Page from "../../common/components/templates/page";

import styles from "./index.module.css"

export default function Profile(): JSX.Element {
    const user = useAppSelector(state => state.login)

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