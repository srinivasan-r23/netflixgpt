import React, { MutableRefObject, useMemo, useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

type LoginProps = {};

function Login(props: LoginProps) {
  const [isSigninForm, setIsSignInForm] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSigninForm);
  };

  const submitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const email = emailRef?.current?.value ?? "";
    const password = passwordRef?.current?.value ?? "";
    const fullName = nameRef?.current?.value ?? null;
    const errorMsg = checkValidateData(email, password, fullName);
    setErrorMsg(errorMsg);
  };



  return (
    <>
      <Header />
      <div className="relative w-[100vw] h-[100vh] flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />

        <form
          className="bg-black absolute top-[1/2] p-12 mx-auto text-white rounded-lg bg-opacity-70"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-3xl py-4">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            type="text"
            placeholder="Email address"
            className="bg-gray-800 p-4 my-4 w-full"
            ref={emailRef}
          />
          {!isSigninForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-800 p-4 my-4 w-full"
              ref={nameRef}
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-800 p-4 my-4 w-full"
            ref={passwordRef}
          />
          {errorMsg && <p className="text-red-700 text-base">{errorMsg}</p>}
          <button
            className="p-4 my-6 w-full bg-red-700 rounded-lg"
            type="submit"
            onClick={submitHandler}
          >
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>
     
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSigninForm
              ? `New to Netflix? Sign Up Now`
              : "Already having an account? Login now"}
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
