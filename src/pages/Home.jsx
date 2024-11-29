import React from "react";
import { Hero, IstiraklerSection, ProjectsSection } from "../components";
import styles from "../styles";
import { heroBg, heroSubtitle, heroTitle } from "../assets/images";

const Home = () => {
  return (
    <>
      <div className={`${styles.flexCenter} w-full`}>
        <Hero
          heroBg={heroBg}
          heroSubtitle={heroSubtitle}
          heroTitle={heroTitle}
        />
      </div>

      <div className={`${styles.flexCenter} w-full`}>
        <ProjectsSection />
      </div>

      <div className={`bg-helkaBgWhite ${styles.flexCenter} w-full`}>
        <IstiraklerSection />
      </div>
    </>
  );
};

export default Home;
