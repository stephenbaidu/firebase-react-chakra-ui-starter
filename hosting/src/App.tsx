import { Button, Text } from '@chakra-ui/react';
import { AuthProvider, loginWithGoogle, signOut, useSession } from './auth';
import { CenteredMiddleBox } from './components';
import logo from './logo.svg'

const onAuthLoading = () => {
    return (
        <CenteredMiddleBox>
            Loading...
        </CenteredMiddleBox>
    )
}

const onAuthError = (error: any) => {
    return (
        <CenteredMiddleBox>
            Error: {error}
        </CenteredMiddleBox>
    )
}

const HomePage = () => {
    const user = useSession()

    return (
        <CenteredMiddleBox p={5}>
            <img src={logo} className="App-logo" alt="logo" />
            <Text>
                Firebase React Chakra UI Starter
            </Text>
            <br />
            {
                !user && <Button colorScheme="red" onClick={loginWithGoogle}>
                    Login with Google
                </Button>
            }
            {
                user && <Button variant="outline" colorScheme="cyan" onClick={signOut}>
                    Sign out
                </Button>
            }
        </CenteredMiddleBox>
    )
}

function App() {
    return (
        <AuthProvider onLoading={onAuthLoading} onError={onAuthError}>
            <HomePage />
        </AuthProvider>
    )
}

export default App
