import React from "react";
import Logo from "../assets/Logonetflix.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <img className="w-48 cursor-pointer" src={Logo} alt="logo" />
      </Link>
      <div>
        <Link to={`${user?.email ? "/account" : "/login"}`}>
          {" "}
          <button className="text-white pr-4 font-bold">{`${
            user?.email ? "Account" : "Sign In"
          }`}</button>
        </Link>
        <Link to={`${user?.email ? "/" : "/signup"}`}>
          {" "}
          <button
            onClick={user?.email ? handleLogOut : null}
            className="text-white bg-red-700 px-6 py-2 cursor-pointer rounded font-bold"
          >
            {`${user?.email ? "Log Out" : "Sign Up"}`}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
