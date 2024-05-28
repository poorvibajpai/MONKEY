import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyAYpRWzvcvxVS4ADHR1PH2_kSsPNW-dRDo",
 authDomain: "ai-genius-b8afe.firebaseapp.com",
 projectId: "ai-genius-b8afe",
 storageBucket: "ai-genius-b8afe.appspot.com",
 messagingSenderId: "439607497653",
 appId: "1:439607497653:web:b46c5ead276245f68e7ffc",
 measurementId: "G-JQBGP3NQ82",
};

// Initialize Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
