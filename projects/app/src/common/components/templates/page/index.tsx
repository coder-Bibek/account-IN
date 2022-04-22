import styles from "./index.module.css"

interface pageProps {
    children?: React.ReactNode;
}

export default function Page({ children }: pageProps): JSX.Element {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}