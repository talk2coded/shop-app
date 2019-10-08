import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAIVTM6zkj1BveJLj_3eFcZpfJb2p32w6A",
    authDomain: "shop-db-b1fab.firebaseapp.com",
    databaseURL: "https://shop-db-b1fab.firebaseio.com",
    projectId: "shop-db-b1fab",
    storageBucket: "",
    messagingSenderId: "183612046990",
    appId: "1:183612046990:web:6c36df79fd0038a5c253df",
    measurementId: "G-ZT5F270ZSY"
  };

  firebase.initializeApp(config);

   export const auth = firebase.auth();
   export const firestore = firebase.firestore();

   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({prompt: 'select_account'});
   export const signInWithGoogle = () => auth.signInWithPopup(provider);

   export default firebase;


