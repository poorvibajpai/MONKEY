import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage"
//import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

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
export const database = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)
export { auth };
export {storage};
