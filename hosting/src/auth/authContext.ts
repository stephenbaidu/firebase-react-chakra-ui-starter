import { createContext } from 'react'
import { firebase } from '../firebase'

interface AuthContext {
    user?: firebase.User | null
    initializing?: boolean
}

export const authContext = createContext<AuthContext>({
    user: undefined
})
