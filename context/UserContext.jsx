import React, { useContext, useState, useEffect } from "react";
import { firebaseAuth as auth, googleAuth } from "@/firebase/config";

// firebase firestore
import {
  setDoc,
  collection,
  doc,
  query,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/config.ts";

import {
  signInWithPopup,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePhoneNumber,
  GoogleAuthProvider,
} from "firebase/auth";

import { Router, useRouter } from "next/router";

const UserContext = React.createContext();

export function useAuth() {
  return useContext(UserContext);
}

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const router = useRouter();

  const githubLogin = () => {
    signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      // setPhotoURL(user.photoURL);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    githubLogin,
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export default UserProvider;
