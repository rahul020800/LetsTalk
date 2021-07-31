import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAhjdqTrJCLR2VqDDzUZMdbwUfF9fhBrvE",
    authDomain: "global-talk-cad97.firebaseapp.com",
    projectId: "global-talk-cad97",
    storageBucket: "global-talk-cad97.appspot.com",
    messagingSenderId: "643266944927",
    appId: "1:643266944927:web:204cd66e8f149ce03ee7aa"
});

const db = firebaseApp.firestore();

export default db;
