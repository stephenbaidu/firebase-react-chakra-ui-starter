import { firebase } from '../firebase'

export const loginWithEmail = async (email: string, password: string): Promise<any> => {
    try {
        const result = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)

        return Promise.resolve(result.user)
    } catch (err) {
        return Promise.reject(err)
    }
}
