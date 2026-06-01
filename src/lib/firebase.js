import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"; // for firestore database
import { getStorage } from "firebase/storage"; // for firebase storage

const firebaseConfig = {
  apiKey: "AIzaSyDe6qJLVdaTRrMuXq-MCvkQ0llnLkFUDaQ",
  authDomain: "ms-fb-001.firebaseapp.com",
  projectId: "ms-fb-001",
  storageBucket: "ms-fb-001.firebasestorage.app",
  messagingSenderId: "189472695194",
  appId: "1:189472695194:web:4b7e99ce3513d9c6add023"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };