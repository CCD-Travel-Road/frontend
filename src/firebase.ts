import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_API_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export {firebase, firebaseApp, db};