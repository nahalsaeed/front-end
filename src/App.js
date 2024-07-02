import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/Signup";
import Login from "./components/login/Login";
import Header from "./components/homepage/header/Header";
function App() {

  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/" element={<Header/>}/>
      </Routes>
      </BrowserRouter> 

    </div>
  );
}

export default App;
