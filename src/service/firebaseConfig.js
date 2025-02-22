import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBlm7ro_Qzy7Qlts1mf9iexjzL1qIXu5mA",
  authDomain: "footware-e828c.firebaseapp.com",
  projectId: "footware-e828c",
  storageBucket: "footware-e828c.firebasestorage.app",
  messagingSenderId: "755219770362",
  appId: "1:755219770362:web:60936710fb6f2950091243",
  measurementId: "G-5BEY75CPZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app)
export default db;
