import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

import styles from "./index.module.css"

import Page from "../../common/components/templates/page"
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks"
import { useEffect } from "react"
import { fetchUsersAsync } from "./loginSlice"

interface loginProps {
    email: string
    password: string
}

const initialValues: loginProps = {
    email: '',
    password: ''
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is invalid or empty'),
    password: Yup.string().required('password cannot be empty'),
});

export default function Login(): JSX.Element {
    const dispatch = useAppDispatch()

    const { loading, users } = useAppSelector(state => state.login)

    useEffect(() => {
        dispatch(fetchUsersAsync())
    }, [dispatch])

    return (
        <Page>
            <section className={styles.loginContainer}>
                <Formik
                    initialValues={initialValues}

                    validationSchema={validationSchema}

                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(false);
                        resetForm();

                    }}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form className={styles.loginFields} noValidate>
                            <p className={styles.loginText}>LOGIN</p>
                            <section className={styles.inputContainer}>
                                <label htmlFor="email">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className={styles.emailField}
                                    placeholder="Email Address"
                                ></Field>
                                <div className={styles.errorText}>{touched.email && errors && errors.email}</div>
                            </section>

                            <section className={styles.inputContainer}>
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    className={styles.passwordField}
                                    placeholder="Password"
                                ></Field>
                                <div className={styles.errorText}>{touched.password && errors && errors.password}</div>
                            </section>

                            <button type="submit" disabled={isSubmitting} className={styles.loginButton}>
                                LOGIN
                            </button>
                        </Form>
                    )}
                </Formik>
            </section>

        </Page >
    )
}