import React from "react";
import GithubButton from "react-github-login-button";

const signup = () => {
  return (
    <div className="text-white mx-auto container flex justify-center flex-col text-center">
      <div>
        <h1>Sign Up</h1>
      </div>
      <div className="">
        {/* <form action="">
          <input className="custom-input" type="text" placeholder="email" />
        </form> */}

        <GithubButton type="light" onClick={() => console.log("Hellow")} />
      </div>
    </div>
  );
};

signup.layout = "MainL";

export default signup;
