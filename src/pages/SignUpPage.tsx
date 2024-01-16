import { Box, Text, Button, Container, FormControl, FormLabel, Heading, Input, Stack, InputGroup, InputRightElement, IconButton, useDisclosure, Center, FormErrorMessage } from "@chakra-ui/react"
import uibackground from "../assets/uibackground.svg"
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { FormEvent, useRef, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import AuthService from "../services/auth-service"

function SignUpPage() {
    const navigate = useNavigate()
    const authService = new AuthService()
    const { isOpen, onToggle } = useDisclosure()

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [errorDetails, setErrorDetails] = useState<string[]>([""])
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(true)

    const inputRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmPasswordRef = useRef<HTMLInputElement>(null)

    const handleSignUp = (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setIsPasswordConfirm(true)
        setIsError(false)
        setErrorDetails([""])

        let email = emailRef.current?.value ?? ""
        let password = passwordRef.current?.value ?? ""
        let confirmPassword = confirmPasswordRef.current?.value ?? ""
        if (confirmPassword != password) {
            setIsPasswordConfirm(false)
            setIsLoading(false)
            return
        }


        authService.SignUp({ email, password })
            .then(resp => {
                setIsLoading(false)
                setIsError(false)
                setErrorDetails([""])

                if (resp.success) {
                    navigate(`/confirmemail/${email}`)
                }
                else {
                    setIsError(true)
                    if (resp.errors)
                        setErrorDetails(resp.errors)

                }
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
    return (
        <Center w="100vw" h="100vh" backgroundImage={uibackground} backgroundRepeat="no-repeat" backgroundColor="gray.700" backgroundSize="cover">
            <Container backdropFilter="blur(5px)" bg={{ base: 'rgba(26, 26, 58, 0.7)' }} maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <Stack spacing="8">
                    <Stack spacing="6">
                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading size={{ base: 'xs', md: 'sm' }}>Create an account</Heading>
                            <Text color="fg.muted">
                                Already have an account? <NavLink to="/login">Sign In</NavLink>
                            </Text>
                        </Stack>
                    </Stack>
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}

                    >
                        <form onSubmit={handleSignUp}>
                            <Stack spacing="6">
                                <Stack spacing="5">
                                    {isError && <FormControl isInvalid={isError}>
                                        {errorDetails.map((item, index) => <FormErrorMessage key={index}>{item}</FormErrorMessage>)}
                                    </FormControl>}
                                    <FormControl isRequired>
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <Input ref={emailRef} id="email" type="email" />
                                    </FormControl>
                                    <FormControl isInvalid={!isPasswordConfirm} isRequired>
                                        <FormLabel htmlFor="password">Password</FormLabel>
                                        <InputGroup>
                                            <InputRightElement>
                                                <IconButton
                                                    variant="text"
                                                    aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                                                    icon={isOpen ? <HiEyeOff /> : <HiEye />}
                                                    onClick={onClickReveal}
                                                />
                                            </InputRightElement>
                                            <Input
                                                ref={passwordRef}
                                                id="password"
                                                name="password"
                                                type={isOpen ? 'text' : 'password'}
                                                autoComplete="current-password"
                                            />
                                        </InputGroup>
                                        <FormErrorMessage>Passwords do not match</FormErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={!isPasswordConfirm} isRequired>
                                        <FormLabel htmlFor="confirmpassword">Confirm Password</FormLabel>
                                        <InputGroup>
                                            <InputRightElement>
                                                <IconButton
                                                    variant="text"
                                                    aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                                                    icon={isOpen ? <HiEyeOff /> : <HiEye />}
                                                    onClick={onClickReveal}
                                                />
                                            </InputRightElement>
                                            <Input
                                                ref={confirmPasswordRef}
                                                id="confirmpassword"
                                                name="confirmpassword"
                                                type={isOpen ? 'text' : 'password'}
                                                autoComplete="current-password"
                                            />
                                        </InputGroup>
                                        <FormErrorMessage>Passwords do not match</FormErrorMessage>
                                    </FormControl>
                                </Stack>
                                <Button isLoading={isLoading} type="submit">Sign Up</Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Container>
        </Center>
    )
}

export default SignUpPage