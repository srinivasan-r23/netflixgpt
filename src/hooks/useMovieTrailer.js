import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const result = await data?.json();
    const trailer = result?.results?.find(
      (result) =>
        result?.type?.toLowerCase() === "trailer" 
    );
    
    dispatch(addTrailerVideo(trailer));
  }; 

  useEffect(() => {
    if(movieId) getMovieVideos();
  }, [dispatch, movieId]);
};

export default useMovieTrailer;
