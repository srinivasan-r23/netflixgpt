import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSigninForm);
  };

  return (
    <div className="">
      <Header />
      <img
        className="w-full h-screen absolute top-0 -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg"
      />
      <div className="flex justify-center h-full items-center">
        <div className="rounded-lg bg-opacity-80 bg-black flex flex-col md:w-1/4 sm:w-2/3 p-9">
          <h1 className="text-3xl font-medium text-white">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            type="text"
            placeholder="Email or mobile number"
            className="mt-4 p-2 outline-none rounded bg-transparent text-white border"
          />
          {!isSigninForm && <input
            type="text"
            placeholder="Full name"
            className="mt-4 p-2 outline-none rounded bg-transparent text-white border"
          />}
          <input
            type="password"
            placeholder="Password"
            className="mt-4 p-2 outline-none rounded bg-transparent text-white border"
          />
          <button className="p-2 mt-4 bg-red-600 text-white rounded">
            {isSigninForm ? "Sign in" : "Sign up"}
          </button>

          <div className="flex pt-4">
            <input id="rememberme" type="checkbox" />
            <label abel htmlFor="rememberme" className="pl-2 text-white">
              Remember me
            </label>
          </div>
          <a onClick={toggleSignInForm} className="text-white pt-4">
            
              <span className="text-gray-400">{isSigninForm ? `New to Netlifx? ` : 'Already a member? '}</span>{isSigninForm ? 'Sign up now' : 'Sign in'}
          
              </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
