import { Box, Button, Container, Heading, Stack, Center, Text } from "@chakra-ui/react"
import uibackground from "../assets/uibackground.svg"
import { NavLink, useParams } from "react-router-dom"
import AuthService from "../services/auth-service";
import { useState } from "react";

function ConfirmEmailPage() {
    const { email } = useParams();
    const authService = new AuthService()
    const [sent, setSent] = useState(false)
    const handleResendConfirmEmail = () => {
        setSent(false)
        if (email)
            authService.SendConfirmationEmail(email).then(() => setSent(true))
    }

    return (
        <Center w="100vw" h="100vh" backgroundImage={uibackground} backgroundRepeat="no-repeat" backgroundColor="gray.700" backgroundSize="cover">
            <Container backdropFilter="blur(5px)" bg={{ base: 'rgba(26, 26, 58, 0.7)' }} maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <Stack spacing="8" textAlign="center">
                    <Heading size={{ base: 'xs', md: 'sm' }}>Confirm your account by clicking the link sent to your email</Heading>
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}

                    >
                        <Center>
                            <Stack spacing="5">
                                {
                                    sent ? <Button disabled>Sent</Button> : <Button onClick={handleResendConfirmEmail}>Resend Confirmation Email</Button>
                                }
                                <Text color="fg.muted">
                                    Already Confirmed? <NavLink to="/login">Sign In</NavLink>
                                </Text>
                            </Stack>
                        </Center>
                    </Box>
                </Stack>
            </Container>
        </Center>
    )
}

export default ConfirmEmailPage