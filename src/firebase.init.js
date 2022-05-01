// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDh2Eao-ZD2qg33ng1g7sQhdCz1Jybev2I",
    authDomain: "hiking-house.firebaseapp.com",
    projectId: "hiking-house",
    storageBucket: "hiking-house.appspot.com",
    messagingSenderId: "347127620455",
    appId: "1:347127620455:web:819ca6b0bdf5cc110c45c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;