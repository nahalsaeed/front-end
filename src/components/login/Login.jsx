import React from "react";
import Facebook from "../../assets/logos_facebook.svg";
import Google from "../../assets/flat-color-icons_google.svg";
import Subtract from "../../assets/Subtract.png";
import circle from "../../assets/Ellipse 1.png";
import circle2 from "../../assets/Ellipse 2.png";

import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex relative  h-[100vh] max-w-screen overflow-hidden  ">
      <div className="mt-14 rounded-[100%] bg-[#2B54FF]  md:-ml-[60vh] md:h-[80vh] md:[95vh] lg:h-[85vh]  lg:w-[100vh] lg:-ml-[70vh] "></div>
      <div className=" bg-[#4CAF50] rounded-[100%] lg:-ml-40 lg:h-[5vh] lg:w-[5vh] lg:mt-32 "></div>
      <img src={Subtract} className="absolute top-0 right-0  sm:h-[200px] sm:w-[200px] lg:h-[400px] lg:w-[400px]  md:h-[250px] md:[300px]"></img>

      <div className="  flex justify-center flex-col text-center w-[480px] lg:ml-[400px]  ">

        <h1 className="text-5xl font-bold text-center mb-20  text-black ">Login</h1>
        <form className="space-y-8 ">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border-b-2  hover:border-blue-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border-b-2  hover:border-blue-600"
          />

          <button
            type="submit"
            className="w-[420px] py-2 mt-4 border-2 text-white bg-[#2B54FF] rounded hover:border-blue-300 "
          >
            Sign up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Create an account? <span className="hover:text-[#2B54FF] cursor-pointer hover:underline"><Link to="/SignUp">SignUp</Link></span></p>
          <p className="text-sm text-gray-500">Or continue with</p>
        </div>
        <div className="mt-4 items-center  flex justify-center flex-row gap-5">
          <img src={Facebook} alt="facebook" />
          <img src={Google} alt="google" />
        </div>
      </div>
      <div>

        <div className="absolute -bottom-10 -right-10">
          <div class=" trsnsform rotate-[320deg]  w-0 h-0  opacity-[60%] border-l-[110px] border-l-transparent border-b-[170px] border-[#2B54FF] border-r-[110px] border-r-transparent md:border-l-[90px] md:border-b-[150px]"></div>
        </div>
        <div className="absolute bottom-10 right-10">
          <div class=" trsnsform rotate-[320deg]  w-0 h-0  opacity-[60%] border-l-[110px] border-l-transparent border-b-[170px] border-[#2B54FF] border-r-[110px] border-r-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;