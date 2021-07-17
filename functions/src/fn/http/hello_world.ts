import * as functions from 'firebase-functions'
import { initializeApp } from '../common'

initializeApp()

export default async (
    request: functions.https.Request,
    response: functions.Response
): Promise<void> => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
}
