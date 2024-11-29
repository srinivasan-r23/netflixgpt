import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector(store => store);
  const navigate = useNavigate();
  const routeToSignin = () => {
    navigate("/login");
  };
  const signOutHandler = () => {
    signOut(auth).then(() => {
      navigate('/login')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="flex justify-between items-center px-10 pt-5">
      <img
        className="object-contain w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
      />
      {!user?.uid ? (
        <button
          onClick={routeToSignin}
          className="bg-white rounded-full px-4 h-8 text-[14px]"
        >
          Sign in
        </button>
      ) : (
        <button
          onClick={signOutHandler}
          className="bg-white rounded-full px-4 h-8 text-[14px]"
        >
          Sign out
        </button>
      )}
    </div>
  );
}

export default Header;
