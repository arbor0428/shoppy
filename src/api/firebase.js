import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_API_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function login() {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user);
    })
    .catch(console.error);
}