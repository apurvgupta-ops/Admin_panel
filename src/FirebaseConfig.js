import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyColR6H7QBu3cVTVhYhVwg50lxD0-PsOjY",
  authDomain: "admin-panel-501b3.firebaseapp.com",
  projectId: "admin-panel-501b3",
  storageBucket: "admin-panel-501b3.appspot.com",
  messagingSenderId: "10129702985",
  appId: "1:10129702985:web:133acce72e56735a8bff98",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();
