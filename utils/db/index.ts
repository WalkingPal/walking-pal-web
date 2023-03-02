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
const db = admin.firestore();

export { db };

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// const firebaseApiKey = process.env.FIREBASE_API_KEY

// const firebaseConfig = {
// 	apiKey: firebaseApiKey,
// 	authDomain: "walking-pal-web.firebaseapp.com",
// 	projectId: "walking-pal-web",
// 	storageBucket: "walking-pal-web.appspot.com",
// 	messagingSenderId: "134900695151",
// 	appId: "1:134900695151:web:0daad06e7a0048cf2d8d9a",
// 	measurementId: "G-N9XNT7329N",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const analytics = getAnalytics(app);

// export { db, app };
