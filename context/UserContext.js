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

// import { db } from "../firebase/config.js";

import {
  signInWithPopup,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  credentialFromResult,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePhoneNumber,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";

import { Router, useRouter } from "next/router";
import axios from "axios";

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

  const [repos, setRepos] = useState();

  const router = useRouter();

  const [githubToken, setGithubToken] = useState();

  const githubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        localStorage.setItem("github-token", token);

        setGithubToken(token);

        router.push("/app/dashboard");
      })
      .catch((error) => console.log(error.message));
  };

  const logout = () =>
    signOut(auth).then(
      (res) => localStorage.removeItem("github-token"),
      router.push("/signin")
    );

  const getGithubToken = async () => {
    const token = localStorage.getItem("github-token");
    const reposResponse = await axios
      .get(`https://api.github.com/user/repos`, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/json",
        },
        params: {
          scope: "repo",
        },
      })
      .catch((err) => {
        return err.message;
      });

    return reposResponse;
    // setRepos(reposResponse);
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
    githubToken,
    githubLogin,
    getGithubToken,
    logout,
    repos,
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export default UserProvider;
