import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import FoodSection from "../components/FoodSection";

const Home = () => {
  return (
    <div className="w-full h-full pb-10 bg-[#111111]">
      <Navbar></Navbar>
      <Hero></Hero>
      <FoodSection foodName="Snacks"></FoodSection>
    </div>
  );
};

export default Home;



// 