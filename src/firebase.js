import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCxC0jFS4PlVGN4R_f17281uB2QWnlFoi8",
    authDomain: "react-firebase-ba717.firebaseapp.com",
    databaseURL: "https://react-firebase-ba717.firebaseio.com",
    projectId: "react-firebase-ba717",
    storageBucket: "react-firebase-ba717.appspot.com",
    messagingSenderId: "556554080112",
    appId: "1:556554080112:web:307743167e9158b954c9b5",
    measurementId: "G-VH69FBBHWT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;