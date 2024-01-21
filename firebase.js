import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD7N19LJIV7RZBjoSoO0ZmVnjYbecKGTaQ",
  authDomain: "react-notes-4b112.firebaseapp.com",
  projectId: "react-notes-4b112",
  storageBucket: "react-notes-4b112.appspot.com",
  messagingSenderId: "1066104933032",
  appId: "1:1066104933032:web:e47d0078cfe07ae3f8d09d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
