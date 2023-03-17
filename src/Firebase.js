import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBaLSjJWROFfFhysvekGFBFROeXWM2o5Hc",
    authDomain: "react-project-shop-4d41e.firebaseapp.com",
    projectId: "react-project-shop-4d41e",
    storageBucket: "react-project-shop-4d41e.appspot.com",
    messagingSenderId: "556643759168",
    appId: "1:556643759168:web:5b8463555a3c0225ab1ba5",
    measurementId: "G-Y02905M6T9"
  };

const firebaseApp = firebase.intializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};