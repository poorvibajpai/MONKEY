import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const signInWithEmailPassword = async (email: string, password: string) => {
 try {
  const userCredential = await signInWithEmailAndPassword(
   auth,
   email,
   password
  );
  const user = userCredential.user;

  const idToken = await user.getIdToken();

  const userInfo = {
   userId: user.uid,
   email: user.email,
   idToken: idToken,
  };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  toast.success("Login Successful");
  return userInfo;
 } catch (error) {
  toast.error("Signin Failed");
  console.error("Error signing in:", error);
  return null;
 }
};

const signUpWithEmailPassword = async (email: string, password: string) => {
 try {
  const userCredential = await createUserWithEmailAndPassword(
   auth,
   email,
   password
  );
  const user = userCredential.user;
  toast.success("SignUP Successfully Please Login.")
  return{
    user,
    success:true
  }  
} catch (error) {
   toast.error("SignUP Failed Please try again !")
  return{
    user:null,
    success:false
  }  
 }
};



const signInWithGooglePopup = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const idToken = await user.getIdToken();

    const userInfo = {
      userId: user.uid,
      email: user.email,
      idToken: idToken,
      photoUrl:user.photoURL
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    toast.success("Login Successful");
    return userInfo;
  } catch (error) {
    toast.error("Google Sign-In Failed");
    console.error("Error during Google sign-in:", error);
    return null;
  }
};
export { signInWithEmailPassword, signUpWithEmailPassword , signInWithGooglePopup };
