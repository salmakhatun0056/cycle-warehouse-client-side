// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoQVzC7PC2fJ4HgKLP5luJPFy8AhoPgpA",
    authDomain: "assignment-11-9c99d.firebaseapp.com",
    projectId: "assignment-11-9c99d",
    storageBucket: "assignment-11-9c99d.appspot.com",
    messagingSenderId: "434978585434",
    appId: "1:434978585434:web:03aebc952f57764b0a1163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth