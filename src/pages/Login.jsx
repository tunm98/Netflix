import React, { useState } from "react";
import CoverPhoto from "../assets/cover-photo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { user, logIn } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="absolute top-0 left-0 h-full w-full object-cover"
          src={CoverPhoto}
          alt="cover photo"
        />
        <div className="fixed top-0 left-0 h-screen w-full bg-black/50 z-60"></div>
        <div className="fixed box-border rounded-[10px] p-[50px] max-w-[450px] w-full h-[600px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] my-auto bg-black text-white">
          <div className="text-[35px] font-bold">Sign In</div>
          {error && (
            <p className="mt-[20px] text-red-500">Invalid email or password</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mt-[20px]">
              {/* <p>Email or phone number</p> */}
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="px-[20px] h-[50px] rounded-[4px] w-full py-[16px] bg-[#333]"
                placeholder="Email or phone number"
                type="Email"
              />
            </div>
            <div className="mt-[20px]">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="px-[20px] h-[50px] rounded-[4px] w-full py-[16px] bg-[#333]"
                placeholder="Password"
                type="Password"
              />
            </div>
            <button className="px-[20px] mt-[20px] w-full h-[50px] bg-red-600 text-[16px] font-bold rounded-[4px]">
              Sign in
            </button>
          </form>
          <div className="mt-[20px] flex justify-between">
            <div>
              <input className="" type="checkbox" />
              <label className="ml-[10px] text-[13px] text-[#b3b3b3]">
                Remember me
              </label>
            </div>
            <div className="text-[13px] text-[#b3b3b3]">Need help?</div>
          </div>
          <div className="text-[16px] text-[#737373] mt-[20px]">
            New to Netflix?{" "}
            <Link to="/login" className="!text-white">
              Sign up now
            </Link>
          </div>
          <div className="mt-[20px] text-[13px] text-[#737373]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="#">Learn more</a>.
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
