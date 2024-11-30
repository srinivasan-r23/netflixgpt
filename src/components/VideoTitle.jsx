import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[15%] px-12 text-white bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg sm:w-full md:w-1/4 lg:w-1/2">{overview}</p>
      <div className="space-x-2">
        <button className="hover:bg-opacity-80 transition-all duration-100 bg-white text-black p-4 px-12 text-lg rounded-lg">
          Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-16 text-lg bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
