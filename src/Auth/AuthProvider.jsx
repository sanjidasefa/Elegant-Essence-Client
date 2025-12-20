import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth/web-extension";
import { auth } from "../firebase/firebase.config";

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);
  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoding(true);
    return signOut(auth);
  };

  const google = () => {
    setLoding(true);
    return signInWithPopup(auth, provider);
  };

  const forgotPass = (email) => {
    setLoding(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
    });
    return () => {
      unSubsCribe();
    };
  }, []);

  const getInfo = {
    setUser,
    user,
    loading,
    setLoding,
    createUser,
    signIn,
    logOut,
    google,
    forgotPass,
  };
  return <AuthContext value={getInfo}>{children}</AuthContext>;
};

export default AuthProvider;
