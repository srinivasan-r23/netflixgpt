import React from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = (props) => {
  return (
    <div className="w-48 pr-4 cursor-pointer duration-100 hover:scale-125 ease-out">
      <img
        className=""
        src={IMAGE_URL + props?.posterPath}
        alt={"Movie card"}
      ></img>
    </div>
  );
};

export default MovieCard;
