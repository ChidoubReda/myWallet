// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPb3vY6jCt21uM8H5zISrH5D9jgHt2-2w",
    authDomain: "mywallet-93bfc.firebaseapp.com",
    databaseURL: "https://mywallet-93bfc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mywallet-93bfc",
    storageBucket: "mywallet-93bfc.firebasestorage.app",
    messagingSenderId: "635855758811",
    appId: "1:635855758811:web:d806612e083f67239d73fe",
    measurementId: "G-ZPMHE6SXFV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app); 
const db = getFirestore(app);


export {app, database, storage, db};