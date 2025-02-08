
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnvPxA5Nipy0oPrtxs7IBZhgAAdx90tQs",
  authDomain: "lmsportal-9d84c.firebaseapp.com",
  projectId: "lmsportal-9d84c",
  storageBucket: "lmsportal-9d84c.firebasestorage.app",
  messagingSenderId: "453137967097",
  appId: "1:453137967097:web:8b0645986bc1191f247f28",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
