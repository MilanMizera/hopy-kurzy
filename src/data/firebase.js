// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQxOMNDEcKcSUHi7lOdi6Cz3v9D2xm6V8",
    authDomain: "online-courses-8ec8d.firebaseapp.com",
    projectId: "online-courses-8ec8d",
    storageBucket: "online-courses-8ec8d.appspot.com",
    messagingSenderId: "711234782958",
    appId: "1:711234782958:web:dc5ac0068f422c60e5d5ff",
    measurementId: "G-32RF72TRCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth }