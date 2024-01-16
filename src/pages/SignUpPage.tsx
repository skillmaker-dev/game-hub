import { Box, Text, Button, Container, FormControl, FormLabel, Heading, Input, Stack, InputGroup, InputRightElement, IconButton, useDisclosure, Center } from "@chakra-ui/react"
import uibackground from "../assets/uibackground.svg"
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { useRef } from "react"
import { NavLink } from "react-router-dom"
function SignUpPage() {
    const { isOpen, onToggle } = useDisclosure()
    const inputRef = useRef<HTMLInputElement>(null)


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
                        <Stack spacing="6">
                            <Stack spacing="5">
                                <FormControl>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input id="email" type="email" />
                                </FormControl>
                                <FormControl>
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
                                            id="password"
                                            name="password"
                                            type={isOpen ? 'text' : 'password'}
                                            autoComplete="current-password"
                                            required
                                        />
                                    </InputGroup>
                                </FormControl>
                            </Stack>
                            <Button>Sign Up</Button>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Center>
    )
}

export default SignUpPage