import styles from "./index.module.css"
import { Formik, Form, Field } from "formik"

import Page from "../../common/components/templates/page"

interface loginProps {
    email: string
    password: string
}

const initialValues: loginProps = {
    email: '',
    password: ''
}

export default function Login(): JSX.Element {
    return (
        <Page>
            <section className={styles.loginContainer}>
                <Formik
                    initialValues={initialValues}
                    validate={(values) => { }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(function () {
                            alert(JSON.stringify(values));
                            setSubmitting(false)
                            resetForm()
                        }, 3000)
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className={styles.loginFields}>
                            <p className={styles.loginText}>LOGIN</p>
                            <section className={styles.inputContainer}>
                                <label htmlFor="email">EMAIL:</label>
                                <Field type="email" name="email" className={styles.emailField} placeholder="Email Address" />
                            </section>

                            <section className={styles.inputContainer}>
                                <label htmlFor="password">PASSWORD:</label>
                                <Field type="password" name="password" className={styles.passwordField} placeholder="Password" />
                            </section>

                            <button type="submit" disabled={isSubmitting} className={styles.loginButton}>
                                LOGIN
                            </button>
                        </Form>
                    )}
                </Formik>
            </section>
        </Page>
    )
}