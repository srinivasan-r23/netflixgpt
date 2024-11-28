import React, { useEffect, useState } from "react";

const Carousel = () => {
  const slides = [
    "https://occ-0-5556-3662.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABYkQG_FD6X-l-COG6wlSelQderkTvFT9KM0hml4-_t5xzGqe9QNevIvIh6XcDfrUILxQrdg8FBVYUF08cCKt7daFsGaj-J7EohEO.webp?r=dc1",
    "https://occ-0-5556-3662.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABU36KripM5_CpScfw0TVc4NG4RmAeBtdIji7JYq7x-IG1uxjuwxvzmNPmFfshZvJFWGDaCvSYAO8hzsn0OsZGVaqgFnEBoB6FRLv.webp?r=71c",
    "https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_tall_panel/IN-en-20241125-TRIFECTA-perspective_fe8a8dbc-e13a-452e-a9c6-284b08c4f974_large.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  const playPauseHanlder = () => {
    setIsPaused(!isPaused);
  };
  useEffect(() => {
    if (!isPaused) {
      const timeout = setTimeout(() => {
        nextSlide();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isPaused]);
  return (
    <div className="relative w-11/12 h-5/6 mx-auto overflow-hidden pt-5 rounded-xl">
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides?.map((slide, index) => (
          <div key={index} className={`w-full flex-shrink-0 `}>
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="relative w-full h-screen object-cover rounded-3xl"
            />

          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white opacity-20 p-2 py-6 rounded-full shadow-md"
      >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white opacity-20 p-2 py-6 rounded-full shadow-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
      <button onClick={playPauseHanlder}>
        {isPaused ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-28 h-2.5 rounded-full ${
              index === currentIndex ? "bg-gray-200" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
