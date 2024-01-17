import { NavLink } from "react-router-dom";
import useAuthStore from "../stores/authenticationStore";
import AuthService from "../services/auth-service";
import { Button } from "@chakra-ui/react";
import { HiLogin, HiLogout } from "react-icons/hi";
function LoginButton() {

    const { isUserLoggedIn, logoutUser } = useAuthStore();
    const authService = new AuthService()

    const handleLogOut = () => {
        authService.SignOut().then((resp) => {
            if (resp.success)
                logoutUser()
        })
    }

    if (isUserLoggedIn)
        return (<Button onClick={handleLogOut} rightIcon={<HiLogout />} size="sm" colorScheme='red' variant='outline'>
            Log out
        </Button>)

    return (
        <NavLink to="/login"><Button rightIcon={<HiLogin />} size="sm" colorScheme='blue' variant='outline'>
            Log In
        </Button></NavLink>
    )
}

export default LoginButton