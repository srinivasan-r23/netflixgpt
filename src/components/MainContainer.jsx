import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movieReducer?.nowPlayingMovies);
  const mainMovie = movies?.[1];
  return (
    <>
      <VideoTitle title={mainMovie?.original_title} overview={mainMovie?.overview} />
      <VideoBackground movieId={mainMovie?.id} />
    </>
  );
};

export default MainContainer;
