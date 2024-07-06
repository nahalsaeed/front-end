import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../../../process";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate('/Login');
      }
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <div className="overflow-hidden">
      <nav className="bg-[#2B54FF] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold ml-4 md:ml-12 lg:ml-24">SQL BOT</div>
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-end justify-center p-2 md:hidden text-white rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>

          <ul className="hidden md:flex space-x-4 ml-auto md:mr-12 lg:ml-auto lg:mr-0 text-sm">
            <li>
              <a href="#home" className="text-white hover:text-gray-200">Home</a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-200">SQL pad</a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-200">Contact Us</a>
            </li>
          </ul>
          &nbsp; &nbsp; &nbsp;
          <div className="hidden md:flex space-x-4">
            {user === null ? (
              <>
                <button className="text-white text-sm border p-2 rounded-3xl hover:text-[#2B54FF] hover:bg-white">
                  <Link to="/SignUp">Create Account</Link>
                </button>
                <button className="bg-white text-sm border text-[#2B54FF] rounded-3xl px-8 hover:bg-[#2B54FF] hover:text-white hover:border-white">
                  <Link to="/Login">Login</Link>
                </button>
              </>
            ) : (
              <>
                <button className="text-white text-sm border p-2 rounded-3xl hover:text-[#2B54FF] hover:bg-white">
                  <Link to="/Profile">{user.email}</Link>
                </button>
                <button onClick={()=>{
                  signOut(auth)
                }} className="bg-white text-sm border text-red-700 rounded-3xl px-8 hover:bg-red-800 hover:text-white hover:border-white">
                  Logout 
                </button>
              </>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <li>
                <a href="#home" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">SQL pad</a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
              </li>
            </ul>
            
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
