import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box height={"100vh"}>
      <NavBar />
      <Box height={"80vh"} paddingX={5}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
