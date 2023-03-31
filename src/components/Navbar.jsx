import React from "react";
import Logo from "../assets/Logonetflix.png";

const Navbar = ({ handleDownload }) => {
  // const test=()=> {
  //   ele=document.querySelector()
  // }
  return (
    <div className="aaa flex items-center justify-between p-4 z-[100] w-full absolute">
      <img className="w-48 cursor-pointer" src={Logo} alt="logo" />
      <div>
        <button className="text-white pr-4 font-bold">Sign In</button>
        <button className="text-white bg-red-700 px-6 py-2 cursor-pointer rounded font-bold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
