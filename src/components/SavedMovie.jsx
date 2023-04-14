import React, { useEffect, useState, useRef } from "react";
import Movie from "../components/Movie";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import "./styles.css";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import useWindowSize from "../hooks/useWindowSize";

const SavedMovie = () => {
  const [movies, setMovies] = useState([]);
  const [widthRef, setWidthRef] = useState(null);
  const sliderRef = useRef(null);
  const { user } = useAuth();
  const componentWidthRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 500;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 500;
  };
  const { width } = useWindowSize();
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.saved);
    });
  }, [user?.email, movies]);

  useEffect(() => {
    setWidthRef(componentWidthRef.current?.offsetWidth);
  }, [user?.email, movies]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const handleDelete = async (passedID) => {
    try {
      console.log("bbb");
      const results = movies.filter((movie) => movie.id !== passedID);
      await updateDoc(movieRef, {
        saved: results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {movies?.length > 0 ? (
        <div className="relative" on>
          <h2 className="text-white p-4 font-bold text-lg">
            Your favourite movies
          </h2>
          <div
            id="slider"
            ref={sliderRef}
            className="group flex overflow-x-scroll overflow-y-hidden scroll-smooth p-4 movie-wrapper scrollbar-hide"
          >
            {widthRef > width ? (
              <CiCircleChevLeft
                className="text-white rounded-full absolute top-[50%] z-10 left-0 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block"
                size={40}
                onClick={slideLeft}
              />
            ) : null}
            <div
              className="flex"
              ref={componentWidthRef}
              onLoad={() => {
                setWidthRef(componentWidthRef.current?.offsetWidth);
              }}
            >
              {movies.map((movie, index) => (
                <Movie
                  key={movie.id}
                  movie={movie}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
            {widthRef > width ? (
              <CiCircleChevRight
                size={40}
                onClick={slideRight}
                className="text-white absolute top-[50%] z-10 right-0 cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block"
              />
            ) : null}
          </div>
        </div>
      ) : (
        <p className="text-white p-4 font-bold text-lg mt-[20px]">
          There's nothing to show...
        </p>
      )}
    </>
  );
};

export default SavedMovie;
