import { useContext } from 'react'
import { authContext } from './authContext'

export const useSession = () => {
    const { user } = useContext(authContext);
    return user
}
