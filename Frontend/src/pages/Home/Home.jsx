import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import ArticlesSlider from "../../components/ArticlesSlider/ArticlesSlider";
import axios from "axios";
import { useTheme } from "../../Context/ThemeContext.jsx";
import Contact from "../../components/Contact/Contact";
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection.jsx";

function Home() {
  return (
    <div className="">
      {/* Blured Circle */}
      <div className="circle--blured top-[-15%] right-[-20%]"></div>

      <main className="container space-y-20">
        {/* Intro Section */}
        <Hero />

        {/* Portfolio */}
        <PortfolioSection />

        {/* About Me */}
        <AboutMe />

        {/* Articles Slider */}
        <ArticlesSlider />
 

        <div id="contact" >
              <Contact />
        </div>

      </main>
    </div>
  );
}

export default Home;
