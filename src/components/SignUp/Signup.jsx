import React from "react";
import Facebook from "../../assets/logos_facebook.svg";
import Google from "../../assets/flat-color-icons_google.svg";
import { Link } from "react-router-dom";
import circle from "../../assets/Ellipse 1.png";
import circle2 from "../../assets/Ellipse 2.png";
import circle3 from "../../assets/Ellipse 3.png";
const SignUp = () => {
  return (

    <div className="flex relative  h-[100vh] max-w-screen overflow-hidden  ">
      <div className="absolute left-0 -ml-[5vh] top-[5%] "><img src={circle} alt="circle" className="h-[90vh] w-auto sm:hidden lg:visible" /></div>
      <div className="absolute left-0 mt-28  ml-32 -z-10"><img src={circle2} alt="circle"  className="h-[50px] w-auto "/></div>
      <div className="absolute top-0 right-0"><img src={circle3} alt="circle" className="h-[37vh]" /></div>
      {/* <div className="absolute -top-80 -right-56 h-[70vh] w-[70vh] rounded-[100%] bg-gray-300 flex justify-end"></div> */}
      <div className="absolute h-[4vh] w-[20vh] transform rotate-[135deg] right-[370px] bg-[#2B54FF]"></div>

      <div className=" ml-[35%] flex justify-center items-center flex-col text-center w-[480px]">
        <h1 className="text-5xl font-bold text-center mb-20  text-black ">Create Account</h1>
        <form className="space-y-8 ">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border-b-2  hover:border-blue-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border-b-2  hover:border-blue-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border-b-2  hover:border-blue-600"
          />
          <input
            type="password"
            placeholder="Confirm Password"
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
          <p className="text-sm text-gray-500">Already have an account? <span className="hover:text-[#2B54FF] cursor-pointer hover:underline"><Link to="/Login">Login</Link></span></p>
          <p className="text-sm text-gray-500">Or continue with</p>
        </div>
        <div className="mt-4 items-center  flex justify-center flex-row gap-5">
          <img src={Facebook} alt="facebook" />
          <img src={Google} alt="google" />
        </div>
      </div>

      <div>

        <div className="absolute -bottom-10 -right-10">
          <div class=" trsnsform rotate-[320deg]  w-0 h-0  opacity-[60%] border-l-[110px] border-l-transparent border-b-[170px] border-[#2B54FF] border-r-[110px] border-r-transparent"></div>
        </div>
        <div className="absolute bottom-10 right-10">
          <div class=" trsnsform rotate-[320deg]  w-0 h-0  opacity-[60%] border-l-[110px] border-l-transparent border-b-[170px] border-[#2B54FF] border-r-[110px] border-r-transparent"></div>
        </div>
        <div className="absolute bottom-[120px] right-[120px]">
          <div class=" trsnsform rotate-[320deg]  w-0 h-0  opacity-[60%] border-l-[110px] border-l-transparent border-b-[170px] border-[#2B54FF] border-r-[110px] border-r-transparent"></div>
        </div>

      </div>
    </div>



  );
};

export default SignUp;
