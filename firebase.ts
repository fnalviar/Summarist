import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwxfq39i0X14I6rglBnKEBEERPOYzRgG8",
  authDomain: "summarist-bd567.firebaseapp.com",
  projectId: "summarist-bd567",
  storageBucket: "summarist-bd567.appspot.com",
  messagingSenderId: "320109463951",
  appId: "1:320109463951:web:2f34b5178a7976c8cee3fa"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }