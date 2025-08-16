import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.init";

import { onAuthStateChanged } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);

  //   const [loading, setLoading] = useState(null);

  const createUser = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user logged in is  - - - ", currentUser);
      setUser(currentUser);
      // setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signOutUser = () => {
    // setLoading(true);
    return signOut(auth);
    // setLoading(false);
  };

  const authinfo = {
    user,
    // loading,
    signInWithGoogle,
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
