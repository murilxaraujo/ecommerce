import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAg8JOTqK2P2lcsvaiVjUVyQEEMMUC06IE",
  authDomain: "ecommerce-8f813.firebaseapp.com",
  databaseURL: "https://ecommerce-8f813.firebaseio.com",
  projectId: "ecommerce-8f813",
  storageBucket: "ecommerce-8f813.appspot.com",
  messagingSenderId: "331305780440",
  appId: "1:331305780440:web:09ecf66ebdb9e72d3bc3ad",
  measurementId: "G-2P4CKVFLS9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
