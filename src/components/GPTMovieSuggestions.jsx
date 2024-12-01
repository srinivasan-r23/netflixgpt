import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store?.gptReducer);
  const { movieResults, movieNames } = gpt;
  if (!movieResults) return null;
  console.log(movieNames[0], movieResults[0]);
  return (
    <div className="bg-black h-full text-white">
      <div>
        {movieResults?.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieNames?.[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
