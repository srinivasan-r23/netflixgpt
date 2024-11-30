import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        dispatch(addNowPlayingMovies(res?.results));
      })
      .catch((err) => console.error(err));
  };
};

export default useNowPlayingMovies;
