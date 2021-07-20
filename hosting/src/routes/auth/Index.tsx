import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { createUserWithEmail, loginAnonymously, loginWithEmail, loginWithGoogle } from '../../auth'
import { BrandingPane, ColorModeSwitcher, FullPageBox, LoginPane, SignupPane } from '../../components'

interface Props {

}

const LoginPage = (props: Props) => {
    const [isLogin, setIsLogin] = useState(true)

    const login = (
        <LoginPane
            onGoogleLogin={loginWithGoogle}
            onAnonymousLogin={loginAnonymously}
            onEmailLogin={loginWithEmail}
            onSignupClicked={() => setIsLogin(!isLogin)}
        />
    )

    const signup = (
        <SignupPane
            onGoogleLogin={loginWithGoogle}
            onAnonymousLogin={loginAnonymously}
            onEmailSignup={createUserWithEmail}
            onLoginClicked={() => setIsLogin(!isLogin)}
        />
    )

    return (
        <FullPageBox px={0} display={{ md: "flex" }}>
            <Box position="absolute" right="8px" top="8px">
                <ColorModeSwitcher />
            </Box>
            <Box display={{ base: "none", md: "block" }} width="full">
                <BrandingPane />
            </Box>
            <Box px={4} width={{ base: "100%", md: "48em" }}>
                {isLogin ? login : signup}
            </Box>
        </FullPageBox>
    )
}

export default LoginPage
