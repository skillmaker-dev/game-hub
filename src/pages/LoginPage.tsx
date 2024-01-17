import { Box, Text, Button, Container, FormControl, FormLabel, Heading, Input, Stack, InputGroup, InputRightElement, IconButton, useDisclosure, Center, FormErrorMessage } from "@chakra-ui/react"
import uibackground from "../assets/uibackground.svg"
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { FormEvent, useRef, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import AuthService from "../services/auth-service"
import useAuthStore from "../stores/authenticationStore"
function LoginPage() {
    const navigate = useNavigate()
    const authService = new AuthService()
    const loginUser = useAuthStore((state) => state.loginUser);
    const { isOpen, onToggle } = useDisclosure()
    const [isLoading, setIsLoading] = useState(false)
    const [isUnauthorized, setIsUnauthorized] = useState(false)
    const [isError, setIsError] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)




    const handleSignIn = (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        let email = emailRef.current?.value ?? ""
        let password = passwordRef.current?.value ?? ""
        authService.SignIn({ email, password })
            .then(resp => {
                setIsLoading(false)
                setIsError(false)
                setIsUnauthorized(false)

                if (resp.success) {
                    loginUser()
                    navigate('/')
                }
                else if (resp.status == 401)
                    setIsUnauthorized(true)
                else
                    setIsError(true)
            })
            .catch(() => {
                setIsLoading(false)
                setIsError(true)
            })
    }
    const onClickReveal = () => {
        onToggle()
        if (inputRef.current) {
            inputRef.current.focus({ preventScroll: true })
        }
    }
    // You cna see that i'm not using error messages returned by the api due to the way Identity Endpoints API (introduced in .NET 8) was designed, error messages are not descriptive in some situations
    return (
        <Center w="100vw" h="100vh" backgroundImage={uibackground} backgroundRepeat="no-repeat" backgroundColor="gray.700" backgroundSize="cover">
            <Container backdropFilter="blur(5px)" bg={{ base: 'rgba(26, 26, 58, 0.7)' }} maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <Stack spacing="8">
                    <Stack spacing="6">
                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading size={{ base: 'xs', md: 'sm' }} color="white">Log in to your account</Heading>
                            <Text color="white">
                                Don't have an account? <NavLink to="/signup">Sign up</NavLink>
                            </Text>
                        </Stack>
                    </Stack>
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}

                    >
                        <form onSubmit={handleSignIn}>
                            <Stack spacing="6">
                                <Stack spacing="5">
                                    {isUnauthorized && <FormControl isInvalid={isUnauthorized}>
                                        <FormErrorMessage >Email or password is incorrect</FormErrorMessage>
                                    </FormControl>}
                                    {isError && <FormControl isInvalid={isError}>
                                        <FormErrorMessage>An error occured, please try again</FormErrorMessage>
                                    </FormControl>}
                                    <FormControl isRequired>
                                        <FormLabel color="white" htmlFor="email">Email</FormLabel>
                                        <Input color="white" ref={emailRef} id="email" type="email" />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel color="white" htmlFor="password">Password</FormLabel>
                                        <InputGroup>
                                            <InputRightElement>
                                                <IconButton
                                                    variant="text"
                                                    aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                                                    icon={isOpen ? <HiEyeOff color="white" /> : <HiEye color="white" />}
                                                    onClick={onClickReveal}
                                                />
                                            </InputRightElement>
                                            <Input
                                                color="white"
                                                id="password"
                                                name="password"
                                                ref={passwordRef}
                                                type={isOpen ? 'text' : 'password'}
                                                autoComplete="current-password"
                                            />
                                        </InputGroup>
                                    </FormControl>
                                </Stack>
                                <Button isLoading={isLoading} type="submit">Sign in</Button>

                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Container>
        </Center>
    )
}

export default LoginPage