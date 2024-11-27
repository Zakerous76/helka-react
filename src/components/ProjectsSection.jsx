import React from "react";
import {
  constructionIllustration,
  no0Projects80,
  no8Projects80,
} from "../assets/images";

const ProjectsSection = () => {
  return (
    <div className="projects-section flex flex-row">
      {/*  */}
      <div className="no80 flex flex-row flex-nowrap w-11/12 mx-auto rounded-md">
        <div className="no8 relative ml-24">
          <img src={no8Projects80} alt="Number 8 of 80" />
          <span className="top-text absolute top-10 left-14 font-gunterz text-5xl text-white">
            BUGÜNE KADAR
          </span>
          <img
            src={constructionIllustration}
            alt="A Construction Illustration"
            className="no8-illustration absolute bottom-0"
          />
        </div>
        <div className="no0 relative right-24 top-0">
          <img src={no0Projects80} alt="Number 0 of 80" className="" />
          <span className="top-text absolute bottom-4 right-14 font-gunterz text-4xl text-white">
            'DEN FAZLA PROJE
          </span>
        </div>
      </div>

      {/*  */}
      <div className="descriptions-1"></div>

      {/*  */}
      <div className="image-slider"></div>

      {/*  */}
      <div className="descriptions-2"></div>

      {/*  */}
      <div className="map-illustration"></div>

      {/*  */}
      <div className="num-projects"></div>
    </div>
  );
};

export default ProjectsSection;
