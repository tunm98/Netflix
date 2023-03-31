import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Movie from "./Movie";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import "./styles.css";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);

  const slideLeft = () => {
    // const slider = document.getElementById("slider");
    sliderRef.current.scrollLeft -= 500;
  };
  const slideRight = () => {
    // const slider = document.getElementById("slider");
    sliderRef.current.scrollLeft += 500;
  };

  return (
    <div className="relative">
      <h2 className="text-white p-4 font-bold text-lg">{title}</h2>
      <div
        id="slider"
        ref={sliderRef}
        className="group flex overflow-x-scroll overflow-y-hidden scroll-smooth p-4 movie-wrapper scrollbar-hide"
      >
        <CiCircleChevLeft
          className="text-white rounded-full absolute top-[50%] z-10 left-0 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block"
          size={40}
          onClick={slideLeft}
        />
        <div className="flex">
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
    </div>
  );
};

export default Row;
