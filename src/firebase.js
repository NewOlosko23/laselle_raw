import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3_PSviGLu4vDoooVg_bjVjbDhpKnC69A",
  authDomain: "lasalle-5a06d.firebaseapp.com",
  projectId: "lasalle-5a06d",
  storageBucket: "lasalle-5a06d.appspot.com",
  messagingSenderId: "627275585301",
  appId: "1:627275585301:web:07588280b168c53587bb1c",
  measurementId: "G-DTN556MKJE",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
