import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSigninForm);
  };
  const handleButtonClick = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const fullName = fullNameRef?.current?.value;
    const errorMsg = checkValidData(
      email,
      password,
      isSigninForm ? "null" : fullName
    );
    setErrorMsg(errorMsg);
    if (errorMsg) return;
    if (!isSigninForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...

          if (user?.accessToken) {
            navigate("/browse");
          }
        })
        .then(() => {
          const { uid, email, displayName } = auth.currentUser;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName }));
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    }
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
            ref={emailRef}
            type="text"
            placeholder="Email or mobile number"
            className="mt-4 p-2 outline-none rounded bg-transparent text-white border"
          />
          {!isSigninForm && (
            <input
              ref={fullNameRef}
              type="text"
              placeholder="Full name"
              className="mt-4 p-2 outline-none rounded bg-transparent text-white border"
            />
          )}
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="mt-4 p-2 outline-none rounded bg-transparent text-white border"
          />
          {errorMsg && <p className="text-red-600 pt-2">*{errorMsg}</p>}
          <button
            onClick={handleButtonClick}
            className="p-2 mt-4 bg-red-600 text-white rounded"
          >
            {isSigninForm ? "Sign in" : "Sign up"}
          </button>

          <div className="flex pt-4">
            <input id="rememberme" type="checkbox" />
            <label abel htmlFor="rememberme" className="pl-2 text-white">
              Remember me
            </label>
          </div>
          <a onClick={toggleSignInForm} className="text-white pt-4">
            <span className="text-gray-400">
              {isSigninForm ? `New to Netlifx? ` : "Already a member? "}
            </span>
            {isSigninForm ? "Sign up now" : "Sign in"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
