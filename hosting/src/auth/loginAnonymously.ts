import { firebase } from './../firebase'

export const loginAnonymously = async (): Promise<any> => {
    try {
        const result = await firebase
            .auth()
            .signInAnonymously()

        return Promise.resolve(result.user)
    } catch (err) {
        return Promise.reject(err)
    }
}
