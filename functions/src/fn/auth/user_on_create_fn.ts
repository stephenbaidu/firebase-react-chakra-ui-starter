import * as functions from 'firebase-functions'
import { ActionResult } from '../../common/types'
import { initializeApp } from '../common'
import { serverTimestamp, usersColRef } from '../../common/db'

initializeApp()

export default async (
    user: functions.auth.UserRecord,
    context: functions.EventContext
) => {
    // Uncomment to require email if anonymous login is not allowed
    // if (!user.email) return

    await createUserRecord(user.uid, user.email, user.displayName)
}

const createUserRecord = async (
    userId: string,
    email?: string, // Make email optional to allow anonymous login
    displayName?: string
): Promise<ActionResult> => {
    const result: ActionResult = { success: false }
    const data = {
        email,
        displayName,
        createdAt: serverTimestamp()
    }

    try {
        await usersColRef()
            .doc(userId)
            .set(data, { merge: false })
        result.success = true
        result.id = userId
    } catch (error) {
        result.error = error
    }

    return result
}
