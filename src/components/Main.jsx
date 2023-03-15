import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const URL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const viewMoreContent = (str, num) => {
    if (str.length > num) {
      return str.slice(str, num) + "...";
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`${URL}${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[30%] p-4">
          <button className="text-black bg-gray-400 border-gray-400 py-2 px-5 mr-4 text-xxl border">
            Play
          </button>
          <button className="text-white border-gray-400 py-2 px-4 mr-4 text-xxl border">
            Watch later
          </button>
          <p className="text-gray mt-2">Release: {movie?.release_date}</p>
          <p className="mt-[10px] w-full md:max-w-[70%] xl:max-w-[45%] text-gray-200">
            {movie ? viewMoreContent(movie?.overview, 150) : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
