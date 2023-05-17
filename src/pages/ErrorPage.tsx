import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box padding={5}>
      <NavBar />
      <Heading>Oops !</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "404 Page Not found"
          : "Sorry an error occured"}
      </Text>
    </Box>
  );
};

export default ErrorPage;
