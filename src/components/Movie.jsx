import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const hanleLike = () => {
    setLike(!like);
  };

  const URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="flex flex-col w-full ">
      <div className="w-[300px] h-[200px] overflow-hidden mr-4 rounded-sm relative">
        <img
          className="w-full h-full object-cover"
          src={`${URL}${movie?.backdrop_path}`}
          alt="photo"
        />
        <div className="w-[300px] h-[200px] absolute top-0 left-0 hover:bg-black opacity-0 hover:opacity-60">
          {like ? (
            <FaHeart
              onClick={hanleLike}
              className="text-white absolute text-lg top-[10px] left-[10px] cursor-pointer"
            />
          ) : (
            <FaRegHeart
              onClick={hanleLike}
              className="text-white absolute text-lg top-[10px] left-[10px] cursor-pointer"
            />
          )}
        </div>
      </div>
      <p className="text-white font-bold mt-2 ml-2">{movie?.title}</p>
    </div>
  );
};

export default Movie;
