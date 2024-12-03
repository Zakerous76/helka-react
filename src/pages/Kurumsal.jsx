import React from "react";
import { Hero } from "../components";
import {
  kurumsalHeroBg,
  kurumsalHeroSubtitle,
  kurumsalHeroTitle,
} from "../assets/images";
import styles from "../styles";
import HakkimizdaSection from "../components/HakkimizdaSection";
import MisyonVizyonSection from "../components/MisyonVizyonSection";

const Kurumsal = () => {
  return (
    <div className={`${styles.flexCenter} flex-col`}>
      <Hero
        heroBg={kurumsalHeroBg}
        heroTitle={kurumsalHeroTitle}
        heroSubtitle={kurumsalHeroSubtitle}
      />
      <HakkimizdaSection />
      <MisyonVizyonSection />
    </div>
  );
};
export default Kurumsal;
