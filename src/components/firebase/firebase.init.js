// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCd5Msz5_P5QrBMr6VIRYVIxGscI072jJY",
    authDomain: "pro-man-4cb6f.firebaseapp.com",
    projectId: "pro-man-4cb6f",
    storageBucket: "pro-man-4cb6f.appspot.com",
    messagingSenderId: "1065558953978",
    appId: "1:1065558953978:web:fe159746ca1a9c2cc0de43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;