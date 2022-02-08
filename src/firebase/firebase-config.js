import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDeYO7KlZTAjp4oYseOLJODLv_EGTy617s",
    authDomain: "journal-app-1f1d5.firebaseapp.com",
    projectId: "journal-app-1f1d5",
    storageBucket: "journal-app-1f1d5.appspot.com",
    messagingSenderId: "66540870836",
    appId: "1:66540870836:web:61f4256b61307f52f6cbe1",
    measurementId: "G-1ZE8XVZS3E"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


export {
    db,
    googleAuthProvider,
    firebase
}