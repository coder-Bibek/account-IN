import LogoutButton from "../../common/components/atoms/LogoutButton";
import Page from "../../common/components/templates/page";

import styles from "./index.module.css"

export default function Profile(): JSX.Element {
    return (
        <Page>
            <h1>Profile</h1>
            <section className={styles.logoutButtonContainer}>
                <LogoutButton></LogoutButton>
            </section>
        </Page>
    )
}