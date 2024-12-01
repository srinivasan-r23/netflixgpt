import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

function Header() {
  const user = useSelector((store) => store?.userReducer);
  const gpt = useSelector((store) => store?.gptReducer);

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

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const languageSelectHandler = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className={`flex justify-between items-center px-10 pt-5 ${
        user?.uid && " bg-black"
      }`}
    >
      <img className="object-contain w-44" src={NETFLIX_LOGO} />
      {!user?.uid ? (
        <button
          onClick={routeToSignin}
          className="bg-white rounded-full px-4 h-8 text-[14px]"
        >
          Sign in
        </button>
      ) : (
        <>
          {gpt?.showGptSearch && (
            <select
              className="bg-gray-900 border-none text-white p-2 m-2"
              onChange={languageSelectHandler}
            >
              {SUPPORTED_LANGUAGES?.map((languages) => (
                <option
                  key={languages?.identifier}
                  value={languages?.identifier}
                >
                  {languages?.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white bg-purple-800 py-2 px-4 mx-4 my-2 rounded-lg"
            onClick={handleGPTSearchClick}
          >
            {!gpt?.showGptSearch ? "GPT Search" : "Home"}
          </button>
          <button
            onClick={signOutHandler}
            className="bg-white rounded-full px-4 h-8 text-[14px]"
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
}

export default Header;
