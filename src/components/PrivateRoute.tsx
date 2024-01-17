import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute() {

    const { isUserLoggedIn } = useAuth()
    if (isUserLoggedIn)
        return <Outlet />
    else return <Navigate to="login" replace={true} />
}

export default PrivateRoute