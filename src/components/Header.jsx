import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

function Header() {
  const user = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
    // this will be called when component unmounts.
  }, [dispatch]);

  const routeToSignin = () => {
    navigate("/login");
  };

  const signOutHandler = () => {
    signOut(auth);
  };

  return (
    <div className="flex justify-between items-center px-10 pt-5">
      <img
        className="object-contain w-44"
        src={NETFLIX_LOGO}
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
