import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDPzTiPd-9GEv6r4eVTi6OL1Ha_3Aid7dA",
  authDomain: "shopping-store-db-cb89f.firebaseapp.com",
  projectId: "shopping-store-db-cb89f",
  storageBucket: "shopping-store-db-cb89f.appspot.com",
  messagingSenderId: "730597415024",
  appId: "1:730597415024:web:3394d62986975e6c903cb5",
  measurementId: "G-P58PB3QV1D"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
