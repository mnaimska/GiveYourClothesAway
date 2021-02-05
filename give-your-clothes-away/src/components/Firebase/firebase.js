import * as firebase from "firebase";
import  app from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_"AIzaSyD_mfnAjBM8IJTcHax2JlLn5lQegZsi4Go",
    // authDomain: process.env.REACT_APP_"giveyourclothesaway.firebaseapp.com",
    // projectId: process.env.REACT_APP_"giveyourclothesaway",
    // storageBucket: process.env.REACT_APP_"giveyourclothesaway.appspot.com",
    // messagingSenderId: process.env.REACT_APP_"477266544066",
    // appId: process.env.REACT_APP_"1:477266544066:web:8418a1b06ad6ff04ca025b"
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

};

// app.initializeApp(firebaseConfig);


class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth=app.auth();
    }
    doCreateUserWithEmailAndPassword =(email,password)=>
    this.auth.createUserWithEmailAndPassword(email,password)

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
}

// export const auth = app.auth();
export default Firebase;
