// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDtTIas5p4aCYE-3loJuEJtCYIpTaYCHNU",
    authDomain: "red-onion-c04eb.firebaseapp.com",
    projectId: "red-onion-c04eb",
    storageBucket: "red-onion-c04eb.appspot.com",
    messagingSenderId: "114727640775",
    appId: "1:114727640775:web:777db34fc45ffbb596a8e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;