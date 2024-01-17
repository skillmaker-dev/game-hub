import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../stores/authenticationStore";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

function PrivateRoute() {

    const isUserLoggedIn = useAuthStore((state) => state.isUserLoggedIn);
    if (isUserLoggedIn) {

        return (<Box height={"100vh"}>
            <NavBar />
            <Box height={"80vh"} paddingX={5}>
                <Outlet />
            </Box>
        </Box>)
    }
    else return <Navigate to="login" replace={true} />
}

export default PrivateRoute