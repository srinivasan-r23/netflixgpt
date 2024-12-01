import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useNowPopularMovies from "../hooks/useNowPopularMovies";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gpt = useSelector((store) => store?.gptReducer);
  useNowPlayingMovies();
  useNowPopularMovies();

  return (
    <>
      <Header />
      {gpt?.showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
