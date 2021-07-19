import { Button, Text } from '@chakra-ui/react'
import { signOut } from '../../auth'
import { CenteredMiddleBox } from '../../components'
import logo from './../../logo.svg'

interface Props {

}

const Dashbard = (props: Props) => {
    return (
        <CenteredMiddleBox p={5}>
            <img src={logo} className="App-logo" alt="logo" />
            <Text>
                Firebase React Chakra UI Starter
            </Text>
            <br />
            <Button variant="outline" colorScheme="cyan" onClick={signOut}>
                Sign out
            </Button>
        </CenteredMiddleBox>
    )
}

export default Dashbard
