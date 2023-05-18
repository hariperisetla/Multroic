import React from "react";
import GithubButton from "react-github-login-button";
import GoogleButton from "react-google-button";

import { useAuth } from "../context/UserContext";
import { useRouter } from "next/router";

const SignIn = () => {
  const { githubLogin } = useAuth();

  const router = useRouter();

  const handleGithubLogin = () => {
    githubLogin();
  };

  return (
    <div className="text-white space-y-5 pb-10 mx-auto container flex justify-center items-center flex-col text-center">
      <div>
        <h1 className="font-extrabold leading-relaxed text-5xl bg-custom-gradient text-transparent bg-clip-text">
          Sign In
        </h1>
      </div>
      <div className="space-y-3 border border-gray-700 p-5 rounded-xl">
        {/* <form action="">
          <input className="custom-input" type="text" placeholder="email" />
        </form> */}

        <GithubButton type="dark" onClick={handleGithubLogin} />
        <GoogleButton
          type="dark"
          onClick={() => console.log("Google Clicked")}
        />
      </div>
    </div>
  );
};

SignIn.layout = "MainL";

export default SignIn;
