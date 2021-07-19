import { Button, Text } from '@chakra-ui/react'
import { loginWithGoogle } from '../../auth'
import { CenteredMiddleBox } from '../../components'
import logo from './../../logo.svg'

interface Props {

}

const LoginPage = (props: Props) => {
    return (
        <CenteredMiddleBox p={5}>
            <img src={logo} className="App-logo" alt="logo" />
            <Text>
                Firebase React Chakra UI Starter
            </Text>
            <br />
            <Button colorScheme="red" onClick={loginWithGoogle}>
                Login with Google
            </Button>
        </CenteredMiddleBox>
    )
}

export default LoginPage
