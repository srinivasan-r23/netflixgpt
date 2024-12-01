import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const selectedLang = useSelector((store) => store?.configSlice?.lang);
  return (
    <>
      <form className="p-6 bg-black flex items-center">
        <input
          type="search"
          className="p-4 m-4 flex-1 rounded outline-none"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        />
        <button className="my-4 p-4 bg-red-700 text-white rounded-lg">
          {lang[selectedLang].search}
        </button>
      </form>
    </>
  );
};

export default GPTSearchBar;
