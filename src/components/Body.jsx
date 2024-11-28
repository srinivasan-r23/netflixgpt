import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";

const Body = () => {
  return (
    <>
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-900 backdrop-blur-md">
      <Header />
      <Carousel />
    </div>
</>
  );
};

export default Body;
