import { auth } from "./firebase.ts";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, type User, type UserCredential } from "firebase/auth";

type SignInResult = {
  user?: UserCredential;
  authError?: string;
};

export const registerUser = async (email: string, password: string): Promise<User | null> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      alert(error.message);
    } else {
      console.error("Unexpected error", error);
    }
    return null;
  }
};

export const signInUser = async (email: string, password: string): Promise<SignInResult> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { authError: "Invalid email or Password" };
    } else {
      return { authError: "Unexpected error occurred" };
    }
  }
};
