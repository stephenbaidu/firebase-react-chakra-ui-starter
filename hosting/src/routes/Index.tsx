import { Redirect, Route, Switch, useRoute } from 'wouter'
import { useSession } from '../auth'
import AuthPage from './auth/Index'
import LoginPage from './login/Index'
import SignupPage from './signup/Index'
import Dashboard from './dashboard/Index'
import { Box } from '@chakra-ui/react'
import { DefaultNavbar, Main } from '../components'

interface AuthenticatedRouteProps {
    component: any
    path: string
}

const AuthenticatedRoute = ({
    component: Component,
    path,
    ...other
}: AuthenticatedRouteProps) => {
    const user = useSession()
    const [, params] = useRoute(path)

    if (!user && params?.rest) {
        return <Redirect to="login" />
    }

    if (!user) {
        return null
    }

    return <Component />
}

const DefaultLayout = () => {
    return (
        <Main>
            <DefaultNavbar />
            <Box mt={100} mb={150}>
                <Switch>
                    <Route path="/" component={Dashboard} />
                    <Route>
                        <Dashboard />
                    </Route>
                </Switch>
            </Box>
        </Main>
    )
}

export const Routes = () => {
    const user = useSession()

    return (
        <>
            {!user && <Route path="/" component={AuthPage} />}
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <AuthenticatedRoute path="/:rest*" component={DefaultLayout} />
            </Switch>
        </>
    )
}
