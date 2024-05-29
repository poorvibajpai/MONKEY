import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCITF5Fc7CyEihTeQ1ZpRZ9UKTM2pYrYHY",
  authDomain: "monkeycloth-16920.firebaseapp.com",
  databaseURL: "https://monkeycloth-16920-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monkeycloth-16920",
  storageBucket: "monkeycloth-16920.appspot.com",
  messagingSenderId: "246772292078",
  appId: "1:246772292078:web:1e0e82bc843319334116ff",
  measurementId: "G-FPNB44MT5W"
};

// Initialize Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
