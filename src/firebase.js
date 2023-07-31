// itegrating our app with firebase
// added by command yarn add firebase

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// copied from config in project settings on firebase
const firebaseConfig = {
    apiKey: "AIzaSyA1CIAo2o_xTLLOR1l1lRDMyVaQxNDnICc",
    authDomain: "linkedin-clone-65a21.firebaseapp.com",
    projectId: "linkedin-clone-65a21",
    storageBucket: "linkedin-clone-65a21.appspot.com",
    messagingSenderId: "657269006343",
    appId: "1:657269006343:web:532a6c9beb9ce3bec24aa2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };