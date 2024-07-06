import React, { useEffect, useState } from "react";
import Facebook from "../../assets/logos_facebook.svg";
import Google from "../../assets/flat-color-icons_google.svg";
import { Link,useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, facebookProvider, googleAuth } from "../../process";





const Providers=()=>{
    const navigate=useNavigate();

  const [value, setValue]=useState('');
const handleSignUpWithGoogle = async (e) => {
    try {
      const data = await signInWithPopup(auth, googleAuth);
      setValue(data.user.email);
      navigate("/");
    } 
    catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth,facebookProvider);
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //   const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('User info:', user);
    } catch (error) {
      console.error('Error during Facebook login:', error.message);
    }
  };
    return(
        <div className="mt-4 items-center flex justify-center flex-row gap-5">
        <button onClick={handleFacebookLogin}>
        <img src={Facebook} alt="facebook" />
        </button>
        <button onClick={handleSignUpWithGoogle}>
        <img src={Google} alt="google" />
        </button>
      </div>
    );
};
export default Providers;