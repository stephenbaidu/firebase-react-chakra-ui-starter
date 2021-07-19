import { ReactNode } from "react"
import { authContext } from "./authContext"
import { firebase } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

interface AuthProviderProps {
    onLoading: () => JSX.Element
    onError: (error: any) => JSX.Element
    children: ReactNode
}

export const AuthProvider = ({ onLoading, onError, children }: AuthProviderProps) => {
    const [user, initializing, error] = useAuthState(firebase.auth())

    if (initializing) return onLoading()
    if (error) return onError(error)

    return (
        <authContext.Provider value={{user, initializing}}>
            {children}
        </authContext.Provider>
    )
}
