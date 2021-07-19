import { firebase } from './../firebase'

const provider = new firebase.auth.GoogleAuthProvider();

export const loginWithGoogle = async (): Promise<any> => {
    try {
        const result = await firebase
            .auth()
            .signInWithPopup(provider)

        return Promise.resolve(result.user)
    } catch (err) {
        return Promise.reject(err)
    }
}
