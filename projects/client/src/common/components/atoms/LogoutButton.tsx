import { useNavigate } from "react-router-dom"
import "./styles/index.css"

export default function LogoutButton(): JSX.Element {
    const navigate = useNavigate()

    const handleClick = () => {
        localStorage.clear()

        navigate("/")
    }

    return (
        <button className="logoutButton" onClick={handleClick}>LOGOUT</button>
    )
}