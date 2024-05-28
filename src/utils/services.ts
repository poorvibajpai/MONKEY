import {
 signInWithEmailAndPassword,
 createUserWithEmailAndPassword,
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
  console.log("User signed up:", user);
  // You can redirect the user or store the user info as needed
 } catch (error) {
  console.error("Error signing up:", error);
 }
};
export { signInWithEmailPassword, signUpWithEmailPassword };
