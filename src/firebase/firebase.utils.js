import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDakifl1-EMNO6fuZeXIneNCAuksM_8DP4",
  authDomain: "shopping-store-7da92.firebaseapp.com",
  projectId: "shopping-store-7da92",
  storageBucket: "shopping-store-7da92.appspot.com",
  messagingSenderId: "1002692177281",
  appId: "1:1002692177281:web:24f31e91415f84036e0c80",
  measurementId: "G-PMB4FMCJY2"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) 
    return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error Creating User', error.message);
    }
  }
  return userRef; 
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
