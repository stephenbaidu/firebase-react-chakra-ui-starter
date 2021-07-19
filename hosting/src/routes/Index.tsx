import React from 'react'
import { Redirect, Route, Switch, useRoute } from 'wouter'
import { useSession } from '../auth'
import LoginPage from './login/Index'
import Dashboard from './dashboard/Index'

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

const AuthenticatedRoutes = () => {
    return (
        <>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route>
                    <Dashboard />
                </Route>
            </Switch>
        </>
    )
}

export const Routes = () => {
    const user = useSession()

    return (
        <>
            {!user && <Route path="/" component={LoginPage} />}
            <Switch>
                <Route path="/login" component={LoginPage} />
                <AuthenticatedRoute path="/:rest*" component={AuthenticatedRoutes} />
            </Switch>
        </>
    )
}
