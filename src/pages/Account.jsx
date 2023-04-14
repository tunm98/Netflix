import React from "react";
import CoverPhoto from "../assets/cover-photo.jpg";
import SavedMovie from "../components/SavedMovie";

const Account = () => {
  return (
    <>
      <div className="relative w-full h-[400px] object-cover">
        <img
          className="h-full w-full object-cover"
          src={CoverPhoto}
          alt="cover photo"
        />
        <div className="absolute top-0 left-0 bg-black/50 w-full h-full z-50 flex items-center">
          <p className="text-white ml-[100px] text-[35px] font-bold">
            Your Favourites
          </p>
        </div>
      </div>
      <SavedMovie />
    </>
  );
};

export default Account;
