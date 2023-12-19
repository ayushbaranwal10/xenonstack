// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCbUq4r0-gePYrn6RPlMUgmd2YKvtWAgMI",
    authDomain: "anoop-e135e.firebaseapp.com",
    projectId: "anoop-e135e",
    storageBucket: "anoop-e135e.appspot.com",
    messagingSenderId: "38004619744",
    appId: "1:38004619744:web:4766ca9d3d983db5715385",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
