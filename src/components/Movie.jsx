import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { HiX } from "react-icons/hi";

const Movie = ({ movie, handleDelete }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = useAuth();

  const movieId = doc(db, "users", `${user?.email}`);

  const handleSave = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(!saved);
      await updateDoc(movieId, {
        saved: arrayUnion({
          id: movie.id,
          title: movie.title,
          backdrop_path: movie?.backdrop_path,
          isSaved: true,
        }),
      });
    } else {
      alert("Please login to save movie");
    }
  };

  const URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="flex flex-col w-full ">
      <div className="w-[300px] h-[200px] overflow-hidden mr-4 rounded-sm relative group">
        <img
          className="w-full h-full object-cover hover:scale-125"
          src={`${URL}${movie?.backdrop_path}`}
          alt="photo"
        />
        <div className="w-[300px] h-[200px] absolute top-0 left-0 hover:bg-black opacity-0 hover:opacity-60">
          {like ? (
            <FaHeart
              onClick={handleSave}
              className="text-white absolute text-lg top-[10px] left-[10px] cursor-pointer"
            />
          ) : (
            <FaRegHeart
              onClick={handleSave}
              className="text-white absolute text-lg top-[10px] left-[10px] cursor-pointer"
            />
          )}
          <div
            onClick={() => handleDelete(movie.id)}
            className="text-white absolute top-[10px] right-[10px] cursor-pointer text-[20px] "
          >
            {movie?.isSaved && <HiX />}
          </div>
        </div>
      </div>

      <p className="text-white font-bold mt-2 ml-2 truncate w-[280px]">
        {movie?.title}
      </p>
    </div>
  );
};

export default Movie;
