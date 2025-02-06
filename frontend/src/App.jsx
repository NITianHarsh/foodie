import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import { Route, Routes } from "react-router-dom";
function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
    </Routes>
    </>
  );
}

export default App;
