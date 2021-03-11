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

export const createUserForm = async (userForm) => {
  const collectionRef = firestore.collection("users");
  try {
    userForm["createdAt"] = new Date();
    const { id } = await collectionRef.add(userForm);
    const documentRef = collectionRef.doc(id);
    const documentSnapshot = await documentRef.get();
    const { message, type } = documentSnapshot.data();

    const previousMessageRef = await collectionRef
      .where("message", "==", `${message}`)
      .where("type", "==", `${type}`)
      .get();
    const previousMessageSnapshot = previousMessageRef.docs;

    if (previousMessageSnapshot.length > 1) {
      for (let { id } of previousMessageSnapshot.slice(1)) {
        await collectionRef.doc(id).delete();
      }
    } else {
      return documentSnapshot.data();
    }
  } catch (e) {
    console.log("failed to save data", e);
  }
};

export const firestore = firebase.firestore();

export default firebase;
