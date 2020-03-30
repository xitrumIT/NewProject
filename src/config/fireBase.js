import * as firebase from 'firebase';
//import firestore from '@react-native-firebase/firestore';

// import auth from '@react-native-firebase/auth';

// import 'firebase/auth';
// import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCejSU3ZcktLKYzwIT5qamWsQMX2uxba9g',
  authDomain: 'logintiendat.firebaseapp.com',
  databaseURL: 'https://logintiendat.firebaseio.com',
  projectId: 'logintiendat',
  storageBucket: 'logintiendat.appspot.com',
  messagingSenderId: '377495473097',
  appId: '1:377495473097:web:02d677b6f6efb966ddf618',
  measurementId: 'G-JNSXF2JY1V',
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// export const Firebase = firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
// this.database = firebase.database();
