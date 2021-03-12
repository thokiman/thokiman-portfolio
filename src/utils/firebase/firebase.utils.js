import firebase from "firebase/app/";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZtTZkB8vnFZrsTEx0R5tve99xGReyWB8",
  authDomain: "thomas-portfolio-db.firebaseapp.com",
  projectId: "thomas-portfolio-db",
  storageBucket: "thomas-portfolio-db.appspot.com",
  messagingSenderId: "283325389511",
  appId: "1:283325389511:web:53aab5e75d777a3e9ebce2",
  measurementId: "G-068L474414",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
