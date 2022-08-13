import admin from "firebase-admin";

// https://dev.to/vvo/how-to-add-firebase-service-account-json-files-to-vercel-ph5
const firebaseAccountCredentials = JSON.parse(
	process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string,
);

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


