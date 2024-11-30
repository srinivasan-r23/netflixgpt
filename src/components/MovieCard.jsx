import React from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = (props) => {
  return (
    <div className="w-48 pr-4">
      <img
        className=""
        src={IMAGE_URL + props?.posterPath}
        alt={"Movie card"}
      ></img>
    </div>
  );
};

export default MovieCard;
