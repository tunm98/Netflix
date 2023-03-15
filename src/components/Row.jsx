import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import "./styles.css";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);
  console.log(movies);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollRight = slider.scrollRight - 500;
  };

  return (
    <>
      <h2 className="text-white p-4 font-bold text-lg">{title}</h2>
      <div className="group flex overflow-x-scroll overflow-y-hidden scroll-smooth p-4 movie-wrapper scrollbar-hide relative">
        <CiCircleChevLeft
          className="text-white rounded-full absolute top-[50%] z-10 left-0 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block"
          size={40}
          onClick={slideLeft}
        />
        <div id={"slider"} className="flex">
          {movies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
        <CiCircleChevRight
          size={40}
          onClick={slideRight}
          className="text-white absolute top-[50%] z-10 right-0 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
