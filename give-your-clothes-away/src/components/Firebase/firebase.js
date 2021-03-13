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
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};

// app.initializeApp(firebaseConfig);
// const database=app.database();
// function writeUserData(userId,  email, password, checkbox1, checkbox2, checkbox3, checkbox4, checkbox5,
//                        amount, selectCity, dzieciom, matkom, bezdomnym, niepełnosprawnym, street,
//                        city, postalCode, mobile, date, time, remarks) {
//     const userRef = app.database().ref('Users/');
//     const singleUser={
//         email, password, checkbox1, checkbox2, checkbox3, checkbox4, checkbox5,
//         amount, selectCity, dzieciom, matkom, bezdomnym, niepełnosprawnym, street,
//         city, postalCode, mobile, date, time, remarks
//
//     }
//     userRef.push(singleUser);
// }


class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth=app.auth();
        // const db= app.firestore();
// const fundacjeRef=db.collection("fundacje");
// fundacjeRef.doc("Dbam o zdrowie").set({
//     name:"Dbam o zdrowie",
//     mission:"zajmuje się pomocą osobom z problemami zdrowotnymi",
//     items: "inne"
// });
// fundacjeRef.doc("Pomoc ubogim").set({
//     name:"Pomoc ubogim",
//     mission: "pomaga ubogim",
//     items: "ubrania, zabawki, książki, inne"
// });
//         fundacjeRef.doc("Dla dzieci").set({
//             name:"Dla dzieci",
//             mission: "Pomaga dzieciom",
//             items: "zabawki, ubrania, książki, inne"
//         });
//
//
//
//        fundacjeRef.get().then((querySnapshot)=>{
//             querySnapshot.forEach((doc)=>{
//                 console.log(doc.data().name)
//             })
//
//         })
//         fundacjeRef.get().then((querySnapshot)=>{
//             querySnapshot.forEach((doc)=>{
//                 console.log(doc.data().mission)
//             })
//         })




    }

    doCreateUserWithEmailAndPassword =(email,password)=>
    this.auth.createUserWithEmailAndPassword(email,password)

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
}



// db.collection("fundacje").add({
//     name: "Fundacja Bez domu",
//     mission: "pomaga zebrać ubrania dla osób bez dachu nad głową"
// })
//     .then((docRef) =>{
//         console.log("Document written with ID", docRef.id);
//     })
//     .catch((error)=>{
//         console.error("Error adding document: ", error);
//     })

// export const auth = app.auth();
export default Firebase;
