import React from "react";
import { Hero } from "../components";
import {
  projelerHeroBg,
  projelerHeroSubtitle,
  projelerHeroTitle,
} from "../assets/images";
import ProjelerKategoriler from "../components/ProjelerKategoriler";

const Projeler = () => {
  return (
    <div className="projeler-page">
      <Hero
        heroBg={projelerHeroBg}
        heroTitle={projelerHeroTitle}
        heroSubtitle={projelerHeroSubtitle}
      />
      <ProjelerKategoriler />
    </div>
  );
};

export default Projeler;
