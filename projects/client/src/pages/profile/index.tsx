import { useSelector } from "react-redux";
import { RootState } from "../../app/redux/store";
import LogoutButton from "../../common/components/atoms/LogoutButton";
import Page from "../../common/components/templates/page";

import styles from "./index.module.css"

export default function Profile(): JSX.Element {
    const user = JSON.parse(useSelector((state: RootState) => state.login.user))

    return (
        <Page>
            <h1>Profile</h1>
            <p>Welcome, {user.email}</p>

            <section className={styles.logoutButtonContainer}>
                <LogoutButton></LogoutButton>
            </section>
        </Page>
    )
}