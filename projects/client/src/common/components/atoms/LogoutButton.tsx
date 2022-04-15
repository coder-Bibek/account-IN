import "./styles/index.css"

export default function LogoutButton(): JSX.Element {

    const handleClick = () => {
        localStorage.clear()
    }

    return (
        <button className="logoutButton" onClick={handleClick}>LOGOUT</button>
    )
}