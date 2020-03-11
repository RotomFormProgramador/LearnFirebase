import firebase from 'firebase';
import *as firebaseui from 'firebaseui';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtBEpWkOP5L9WsEOeN92v-OUZh0Z1dM0A",
    authDomain: "aprendiendofirebase-719e2.firebaseapp.com",
    databaseURL: "https://aprendiendofirebase-719e2.firebaseio.com",
    projectId: "aprendiendofirebase-719e2",
    storageBucket: "aprendiendofirebase-719e2.appspot.com",
    messagingSenderId: "741717218326",
    appId: "1:741717218326:web:108a484c2ee5f0e4035137",
    measurementId: "G-LR24YQ4DZZ"
};

const uiConfig = {
    singInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID],
    signInSuccessUrl: '/',
}



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();


export const auth = firebase.auth()
export const db = firebase.firestore()




export const starUI = (elementId) => {
    const ui = new firebaseui.auth.AuthUI(auth)
    ui.start(elementId, uiConfig)
}





