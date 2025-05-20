import React from "react";
import Hero from "../Components/Hero";
import Project from "../Components/Projects"
import AboutMe from "../Components/About";
import Navbar from"../Components/navbar"
import Footer from "../Components/footer";
const Home = () => {
  return (
  
     <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
      <Footer />
      </div>
    
  );
};

export default Home;
