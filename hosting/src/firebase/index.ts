import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import config from './config'

if (firebase.apps.length === 0) {
    firebase.initializeApp(config)
}

const auth = firebase.auth()
const db = firebase.firestore()
const functions = firebase.app().functions('europe-west3')

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    db.settings({ host: "localhost:8080", ssl: false });
    functions.useEmulator("localhost", 5001)
}

export {
    db,
    auth,
    config,
    firebase,
    functions,
}