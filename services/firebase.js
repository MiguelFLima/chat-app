import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDOlwQmOUwmNeOCqqLbY69rvQVEt0J7Mf0",
    authDomain: "chat-app-e6ac6.firebaseapp.com",
    projectId: "chat-app-e6ac6",
    storageBucket: "chat-app-e6ac6.appspot.com",
    messagingSenderId: "365638698208",
    appId: "1:365638698208:web:e4acc6a6d0455e0fb73c85"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };