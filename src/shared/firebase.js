
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHxqG9ym7h0Z1aO1sxtq0vDWBV3pd1NFY",
    authDomain: "bulletin-931e0.firebaseapp.com",
    projectId: "bulletin-931e0",
    storageBucket: "bulletin-931e0.appspot.com",
    messagingSenderId: "864216001439",
    appId: "1:864216001439:web:3ba23cc3292c97dd812baa",
    measurementId: "G-940HKSQ40T"

}

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const firestore = firebase.firestore();



export  { apiKey, firestore};