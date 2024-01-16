import useAuth from "../hooks/useAuth";
import { NavLink } from "react-router-dom";
function LoginButton() {
    const { isUserLoggedIn } = useAuth();

    if (isUserLoggedIn)
        return null
    return (
        <NavLink to="/login">Login</NavLink>
    )
}

export default LoginButton