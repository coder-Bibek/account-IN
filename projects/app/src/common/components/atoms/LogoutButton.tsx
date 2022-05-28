import { useNavigate } from "react-router-dom"
import "./styles/index.css"

// import { toast } from "react-toastify"
import { useAppDispatch } from "../../../app/redux/hooks"
import { removeUserAsync } from "../../../pages/login/loginSlice"

export default function LogoutButton(): JSX.Element {
    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(removeUserAsync())

        // toast.success('logged out succesfully')

        navigate("/")
    }

    return (
        <button className="logoutButton" onClick={handleClick}>LOGOUT</button>
    )
}