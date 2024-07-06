import React from "react";
import Subtract from "../../assets/Subtract.png";
import circle from "../../assets/Ellipse 1.png";
import circle2 from "../../assets/Ellipse 2.png";
import { Link, useNavigate } from "react-router-dom"; 
import { auth } from "../../process";
import { signInWithEmailAndPassword } from "firebase/auth";
import Providers from "../providers/Providers";
import { LoginSchema } from "../../zod/zod-validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate(); 
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(LoginSchema)
  });

  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);
      
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div className="relative h-screen flex justify-center items-center max-w-screen overflow-hidden">
      <div className="absolute left-0 top-[5%] -ml-[5vh] hidden lg:block">
        <img src={circle} alt="circle" className="h-[90vh] w-auto" />
      </div>
      <div className="absolute left-0 ml-32 top-28 hidden lg:block">
        <img src={circle2} alt="circle" className="h-[50px] w-auto" />
      </div>
      <img
        src={Subtract}
        className="absolute top-0 right-0 hidden lg:block h-[400px] w-[400px]"
        alt="substract"
      />
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col text-center w-full max-w-[480px] p-4">
          <h1 className="text-5xl font-bold mb-20 text-black">Login</h1>
          <form className="space-y-8 w-full" onSubmit={handleSubmit(handleLogin)}>
            <div>
              <input 
                type="text"
                placeholder="Email"
                className="w-full p-2 border-b-2 hover:border-blue-600"
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-sm flex justify-start text-xs">{errors.email.message}</p>}
            </div>
            <div>           
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border-b-2 hover:border-blue-600"
                {...register("password")}
              />
              {errors.password && <p className="text-red-500 text-sm flex justify-start text-xs">{errors.password.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-[#2B54FF] rounded hover:bg-blue-500"
            >
              Login
            </button>
          </form>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Create an account?{" "}
              <span className="hover:text-[#2B54FF] cursor-pointer hover:underline">
                <Link to="/SignUp">SignUp</Link>
              </span>
            </p>
            <p className="text-sm text-gray-500">Or continue with</p>
          </div>
          <Providers/>
        </div>
      </div>
      <div className="absolute -bottom-10 -right-10">
        <div className="transform rotate-[320deg] w-0 h-0 hidden lg:block opacity-[60%] border-l-[110px] border-l-transparent border-b-[170px] border-[#2B54FF] border-r-[110px] border-r-transparent md:border-l-[90px] md:border-b-[150px]"></div>
      </div>
      <div className="absolute bottom-10 right-10">
        <div className="transform rotate-[320deg] w-0 h-0 hidden lg:block opacity-[60%] border-l-[110px] border-l-transparent border-b-[170px] border-[#2B54FF] border-r-[110px] border-r-transparent"></div>
      </div>
    </div>
  );
};

export default Login;
