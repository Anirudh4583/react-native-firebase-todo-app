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

  apiKey: 'AIzaSyBTaOEnFyP-BZxmcDE6NHx5dk0gQ-d8UX8',
  authDomain: 'react-todo-an.firebaseapp.com',
  projectId: 'react-todo-an',
  storageBucket: 'react-todo-an.appspot.com',
  messagingSenderId: '550422368632',
  appId: '1:550422368632:web:05acef7f25f2fea09cb88d',
  measurementId: 'G-97ENTY5YBZ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
