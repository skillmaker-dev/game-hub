import { Button } from "@chakra-ui/react"
import { HiLogout } from 'react-icons/hi'
import useAuth from "../hooks/useAuth";
import AuthService from "../services/auth-service";
function LogoutButton() {
    const { isUserLoggedIn, logoutUser } = useAuth();
    const authService = new AuthService()
    const handleLogOut = () => {
        authService.SignOut().then((resp) => {
            if (resp.success)
                logoutUser()
        })


    }
    if (!isUserLoggedIn)
        return null
    return (
        <Button onClick={handleLogOut} leftIcon={<HiLogout />} size="sm" colorScheme='red' variant='outline'>
            Log out
        </Button>
    )
}

export default LogoutButton