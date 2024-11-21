import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAG1WVyY6OMVvGJz6Zmm6YGuNN_gKOL3Q8",
    authDomain: "proyectofinal-balcazar.firebaseapp.com",
    projectId: "proyectofinal-balcazar",
    storageBucket: "proyectofinal-balcazar.firebasestorage.app",
    messagingSenderId: "799696504577",
    appId: "1:799696504577:web:d21bb350c8cdc2ccb87d00",
    measurementId: "G-YZP5MJDDBT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default { db };