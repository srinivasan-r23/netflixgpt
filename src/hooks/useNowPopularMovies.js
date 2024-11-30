import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPopularMovies();
  }, []);

  const getNowPopularMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?page=2", API_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        dispatch(addNowPopularMovies(res?.results));
      })
      .catch((err) => console.error(err));
  };
};

export default useNowPopularMovies;
