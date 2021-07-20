import * as admin from 'firebase-admin'

type FirebaseCollectionReference = FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>

export const usersColRef = (): FirebaseCollectionReference => {
    return admin.firestore().collection('users')
}

export const serverTimestamp = () => admin.firestore.FieldValue.serverTimestamp()
