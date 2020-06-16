import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnKtCbmetIVvK0b9IMjkc783otAwIdq6o",
    authDomain: "projectx-6de2f.firebaseapp.com",
    databaseURL: "https://projectx-6de2f.firebaseio.com",
    projectId: "projectx-6de2f",
    storageBucket: "projectx-6de2f.appspot.com",
    messagingSenderId: "608369499235",
    appId: "1:608369499235:web:bf6ed928e2436a2dfa2c56"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
