import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const selectedLang = useSelector((store) => store?.configSlice?.lang);
  const searchTextRef = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json?.results;
  };
  const handleGPTSearch = async () => {
    const searchText = searchTextRef?.current?.value;
    let getResults = [
      "Joker",
      "Avengers",
      "Young Sheldon",
      "Spider Man",
      "Batman",
    ];
    try {
      const gptQuery =
        `Act like a movie recommendation system and suggest some movies for the query ` +
        searchText +
        ". only give me names of the 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, GolMaal, Koi Mil Gaya.";

      // await openAI.chat.completions.create({
      //   messages: [{ role: "user", content: gptQuery }],
      //   model: "gpt-4o",
      // });
      const promiseArray = getResults.map((movie) => searchMovieTMDB(movie));
      const results = await Promise.all(promiseArray);
      dispatch(addGPTMovieResult({movieNames: results, movieResults: getResults}));
    } catch (err) {
      console.log("CHATGPT API ERROR", err);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-6 bg-black flex items-center"
      >
        <input
          ref={searchTextRef}
          type="search"
          className="p-4 m-4 flex-1 rounded outline-none"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        />
        <button
          onClick={handleGPTSearch}
          className="my-4 p-4 bg-red-700 text-white rounded-lg"
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </>
  );
};

export default GPTSearchBar;
