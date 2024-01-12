import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box overflowY={"hidden"}>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
