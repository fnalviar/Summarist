import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCwxfq39i0X14I6rglBnKEBEERPOYzRgG8",
  authDomain: "summarist-bd567.firebaseapp.com",
  projectId: "summarist-bd567",
  storageBucket: "summarist-bd567.appspot.com",
  messagingSenderId: "320109463951",
  appId: "1:320109463951:web:2f34b5178a7976c8cee3fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();