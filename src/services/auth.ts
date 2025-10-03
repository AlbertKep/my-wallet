import { auth } from "./firebase.ts";
import { createUserWithEmailAndPassword, type User } from "firebase/auth";

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
