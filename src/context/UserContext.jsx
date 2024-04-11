"use client";

import React, { useContext, useState, useEffect } from "react";
import {
  firebaseAuth as auth,
  googleAuth,
  githubProvider,
} from "@/firebase/config";

import {
  signInWithPopup,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signInWithRedirect,
} from "firebase/auth";

import { useRouter } from "next/navigation";

const UserContext = React.createContext();

export function useAuth() {
  return useContext(UserContext);
}

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const passwordLessLogin = (email) => {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: "http://localhost:3000/signin",
      // This must be true.
      handleCodeInApp: true,
      // iOS: {
      //   bundleId: "com.example.ios",
      // },
      // android: {
      //   packageName: "com.example.android",
      //   installApp: true,
      //   minimumVersion: "12",
      // },
      // dynamicLinkDomain: "example.page.link",
    };

    console.log(email);

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        console.log("Email sent successfully");
        window.localStorage.setItem("emailForSignIn", email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        // ...
      });
  };

  const passwordLessConfirmation = () => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt("Please provide your email for confirmation");
      }
      // The client SDK will parse the code from the link for you.
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem("emailForSignIn");
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
          router.replace("/");
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
    }
  };

  const githubRedirectLogin = () => {
    signInWithRedirect(auth, githubProvider);
  };

  const githubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);

        router.push("/app/dashboard");
      })
      .catch((error) => console.log(error.message));
  };

  const logout = () =>
    signOut(auth).then(
      // (res) => localStorage.removeItem("github-token"),
      router.push("/signin")
    );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    githubLogin,
    logout,
    passwordLessLogin,
    passwordLessConfirmation,
    githubRedirectLogin,
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export default UserProvider;
