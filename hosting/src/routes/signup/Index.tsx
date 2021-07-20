import { Box } from '@chakra-ui/react'
import { useLocation } from 'wouter'
import { createUserWithEmail, loginAnonymously, loginWithGoogle } from '../../auth'
import { BrandingPane, ColorModeSwitcher, FullPageBox, SignupPane } from '../../components'

interface Props {

}

const SignupPage = (props: Props) => {
    // eslint-disable-next-line
    const [_, setLocation] = useLocation()

    const goToLogin = () => setLocation("/login")

    return (
        <FullPageBox px={0} display={{ md: "flex" }}>
            <Box position="absolute" right="8px" top="8px">
                <ColorModeSwitcher />
            </Box>
            <Box display={{ base: "none", md: "block" }} width="full">
                <BrandingPane />
            </Box>
            <Box px={4} width={{ base: "100%", md: "48em" }}>
                <SignupPane
                    onGoogleLogin={loginWithGoogle}
                    onAnonymousLogin={loginAnonymously}
                    onEmailSignup={createUserWithEmail}
                    onLoginClicked={goToLogin}
                />
            </Box>
        </FullPageBox>
    )
}

export default SignupPage
