import firebase from 'firebase/app';
import 'firebase/firestore';
// import {
//   apiKey,
//   authDomain,
//   projectId,
//   storageBucket,
//   messagingSenderId,
//   appId,
//   measurementId,
// } from 'react-native-dotenv';

// Initialize Firebase
const firebaseConfig = {
  // apiKey,
  // authDomain,
  // projectId,
  // storageBucket,
  // messagingSenderId,
  // appId,
  // measurementId,

  apiKey: 'some',
  authDomain: 'some',
  projectId: 'some',
  storageBucket: 'some',
  messagingSenderId: 'some',
  appId: 'some',
  measurementId: 'some',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
