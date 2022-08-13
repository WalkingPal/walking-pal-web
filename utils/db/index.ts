import admin from "firebase-admin";
import firebaseAccountCredentials from "./walking-pal-firebase-adminsdk-5wneb-81e9ef3830.json";


const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount;

if (!admin.apps.length) {
	try {
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
		});
	} catch (error) {
    if (error instanceof Error)
			console.log("Firebase admin initialization error", error.stack);
	}
}
export default admin.firestore();


