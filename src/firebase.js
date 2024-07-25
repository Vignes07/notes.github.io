// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCq93P-BRz3WfxknWh5mPWV3i25H5UUB4I",
    authDomain: "notes-fb6aa.firebaseapp.com",
    projectId: "notes-fb6aa",
    storageBucket: "notes-fb6aa.appspot.com",
    messagingSenderId: "430488492124",
    appId: "1:430488492124:web:5f66c0ce7bd4c8b0a8ee99",
    measurementId: "G-6BPQFWLXHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);