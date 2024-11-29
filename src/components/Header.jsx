import React from "react";

function Header() {
  const routeToSignin = () => {
    window.location.href = '/login';
  }
  return (
    <div className="flex justify-between items-center px-10 pt-5">
      <img className="object-contain w-44" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" />
      <button onClick={routeToSignin} className="bg-white rounded-full px-4 h-8 text-[14px]">Sign in</button>
    </div>
  );
}

export default Header;
