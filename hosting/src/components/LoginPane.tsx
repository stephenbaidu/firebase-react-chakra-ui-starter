import React, { useState } from 'react'
import {
    Alert,
    Button,
    Center,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Spacer,
    Text,
    VStack
} from '@chakra-ui/react'
import {
    Logo,
    PasswordInput,
    TermsAndPrivacyText,
    TextDivider
} from '.'
import { FaGooglePlusSquare, FaLock, FaUser } from 'react-icons/fa'
import { useError } from '../hooks'
import { AppName } from '../utils'

interface Props {
    onGoogleLogin?: () => void,
    onAnonymousLogin?: () => void,
    onEmailLogin?: (email: string, password: string) => void,
    onSignupClicked?: () => void,
}

export const LoginPane = ({
    onGoogleLogin,
    onAnonymousLogin,
    onEmailLogin = (email, password) => { },
    onSignupClicked = () => { },
}: Props) => {
    const [email, setEmail] = React.useState("")
    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const [password, setPassword] = React.useState("")
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    const loadingText = "In progress..."
    const [emailInProgress, setEmailInProgress] = useState(false)
    const [googleInProgress, setGoogleInProgress] = useState(false)
    const [anonymousInProgress, setAnonymousInProgress] = useState(false)

    const googleError = useError()
    const emailError = useError()
    const anonymousError = useError()

    const cleanErrors = () => {
        googleError.clear()
        anonymousError.clear()
        emailError.clear()
    }

    const loginWithGoogle = async () => {
        if (!onGoogleLogin) {
            return
        }

        try {
            setGoogleInProgress(true)
            cleanErrors()
            await onGoogleLogin()
        } catch (error) {
            googleError.setError(error.message)
        } finally {
            setGoogleInProgress(false)
        }
    }

    const loginAnonymously = async () => {
        if (!onAnonymousLogin) {
            return
        }

        try {
            setAnonymousInProgress(true)
            cleanErrors()
            await onAnonymousLogin()
        } catch (error) {
            anonymousError.setError(error.message)
        } finally {
            setAnonymousInProgress(false)
        }
    }

    const loginWithEmail = async () => {
        try {
            setEmailInProgress(true)
            cleanErrors()
            await onEmailLogin(email, password)
        } catch (error) {
            emailError.setError(error.message)
        } finally {
            setEmailInProgress(false)
        }
    }

    return (
        <VStack
            spacing={5}
            mx={{ base: 1, md: 16 }}
            align="stretch"
        >
            <Spacer />
            <Spacer />
            <Center>
                <Logo />
            </Center>
            <Spacer />
            <Center>
                <Heading as="h4" size="md" color="blue.600">
                    Welcome back.
                </Heading>
            </Center>
            {
                googleError.hasError && <Alert status="error" variant="left-accent">
                    {googleError.errorMessage}
                </Alert>
            }
            {
                anonymousError.hasError && <Alert status="error" variant="left-accent">
                    {anonymousError.errorMessage}
                </Alert>
            }
            {
                onGoogleLogin && <Button
                    colorScheme="blue"
                    variant="outline"
                    size="lg"
                    onClick={loginWithGoogle}
                    leftIcon={<FaGooglePlusSquare />}
                    isLoading={googleInProgress}
                    loadingText={loadingText}
                >
                    Continue with Google
                </Button>
            }
            {
                onAnonymousLogin && <Button
                    colorScheme="cyan"
                    variant="outline"
                    size="lg"
                    onClick={loginAnonymously}
                    leftIcon={<FaUser />}
                    isLoading={anonymousInProgress}
                    loadingText={loadingText}
                >
                    Continue as Guest
                </Button>
            }
            <TextDivider text="or" />
            <Text fontSize="md" fontWeight="500">
                Login into your account
            </Text>
            {
                onSignupClicked && <Center>
                    <Text fontSize="md">
                        New to {AppName}?&nbsp;
                        <Button colorScheme="blue" variant="link" onClick={onSignupClicked} >
                            Sign up
                        </Button>
                    </Text>
                </Center>
            }
            {
                emailError.hasError && <Alert status="error" variant="left-accent">
                    {emailError.errorMessage}
                </Alert>
            }
            <FormControl id="email">
                <FormLabel display="none">Email address</FormLabel>
                <Input
                    type="email"
                    placeholder="Your email address"
                    size="lg"
                    value={email}
                    onChange={onEmailChange} />
            </FormControl>
            <FormControl id="password">
                <FormLabel display="none">Password</FormLabel>
                <PasswordInput
                    placeholder="Your password"
                    size="lg"
                    value={password}
                    onChange={onPasswordChange} />
            </FormControl>
            <Button
                colorScheme="blue"
                size="lg"
                onClick={loginWithEmail}
                leftIcon={<FaLock />}
                isLoading={emailInProgress}
                loadingText={loadingText}
            >
                Login
            </Button>
            <Flex justifyContent="right">
                <Spacer />
                <Link color="blue.600">
                    Forgot your password?
                </Link>
            </Flex>
            <Divider />
            <Center>
                <TermsAndPrivacyText />
            </Center>
            <Spacer />
        </VStack>
    )
}
