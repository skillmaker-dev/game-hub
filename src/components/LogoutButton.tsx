import { Button } from "@chakra-ui/react"
import { HiLogout } from 'react-icons/hi'
import useAuth from "../hooks/useAuth";
function LogoutButton() {
    const { isUserLoggedIn, logoutUser } = useAuth();

    const handleLogOut = () => {
        logoutUser()

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