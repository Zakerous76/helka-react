import React from "react";
import { heroBg, heroSubtitle, heroTitle } from "../assets/images";

const Hero = () => {
  return (
    <div className="w-screen relative h-screen">
      <div className="relative w-full h-full">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* For large screens */}
        <div className="hidden sm:flex">
          <div className="hero-text flex w-full justify-between absolute bottom-[60px] left-0 z-10 align-baseline">
            <img className="w-1/3" src={heroTitle} alt="Main title" />
            <img
              className="w-1/3 pt-28"
              src={heroSubtitle}
              alt="Subtitle: Project Name"
            />
          </div>
        </div>
        {/* For small screens */}
        <div className="sm:hidden">
          <div className="hero-text flex flex-col sm:flex-row w-full justify-between absolute bottom-[90px] left-0 z-10 items-start sm:items-end ">
            <img
              className="w-10/12 sm:w-1/3"
              src={heroTitle}
              alt="Main title"
            />
          </div>
          <div className="hero-text flex flex-col sm:flex-row w-full justify-between absolute bottom-[50px] left-0 z-10 items-end sm:items-end ">
            <img
              className="w-10/12 sm:w-1/3"
              src={heroSubtitle}
              alt="Subtitle: Project Name"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default Hero;
