import { firebase } from './../firebase'

export const createUserWithEmail = async (email: string, password: string): Promise<any> => {
    try {
        const result = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)

        return Promise.resolve(result.user)
    } catch (err) {
        return Promise.reject(err)
    }
}