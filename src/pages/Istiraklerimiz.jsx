import React from "react";
import { Hero, IstiraklerSection } from "../components";
import {
  istiraklerimizHeroBg,
  istiraklerimizHeroSubtitle,
  istiraklerimizHeroTitle,
} from "../assets/images";

const Istiraklerimiz = () => {
  return (
    <div>
      <Hero
        heroBg={istiraklerimizHeroBg}
        heroTitle={istiraklerimizHeroTitle}
        heroSubtitle={istiraklerimizHeroSubtitle}
      ></Hero>
      <div className="mt-20">
        <IstiraklerSection />;
      </div>
    </div>
  );
};

export default Istiraklerimiz;
