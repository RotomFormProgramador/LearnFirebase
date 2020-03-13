//Core Firebase
import * as firebase from "firebase/app"

// Firebase services 
//import firestore from "firebase/firestore"
import * as firebaseui from 'firebaseui'
import "firebase/firestore"  


//Confing
var firebaseConfig = {
    apiKey: "AIzaSyBtBEpWkOP5L9WsEOeN92v-OUZh0Z1dM0A",
    authDomain: "aprendiendofirebase-719e2.firebaseapp.com",
    databaseURL: "https://aprendiendofirebase-719e2.firebaseio.com",
    projectId: "aprendiendofirebase-719e2",
    storageBucket: "aprendiendofirebase-719e2.appspot.com",
    messagingSenderId: "741717218326",
    appId: "1:741717218326:web:108a484c2ee5f0e4035137",
    measurementId: "G-LR24YQ4DZZ"
}


// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//firebase.analytics()

export const defaultauth=firebase.auth()
export const db  =firebase.firestore()


//Ui Config
const uiConfig = ({
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
})

const ui = new firebaseui.auth.AuthUI(firebase.auth())

export const startFirebaseUI = function (elementId) {
  ui.start(elementId, uiConfig)
}

 