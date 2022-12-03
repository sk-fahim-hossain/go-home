import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyB7MwKHXpQiBoHhmg2ptDoNah7Fu-Cry18",
  authDomain: "go-home-9fda3.firebaseapp.com",
  projectId: "go-home-9fda3",
  storageBucket: "go-home-9fda3.appspot.com",
  messagingSenderId: "58146692256",
  appId: "1:58146692256:web:354777a998d3213b42bdc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;