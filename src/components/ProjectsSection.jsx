import React from "react";
import {
  constructionIllustration,
  mapIllustration,
  no0Projects80,
  no8Projects80,
  slideImgContainer,
  tamamDevamIcon,
} from "../assets/images";
import { projectsDescription1, projectsDescription2 } from "../constants";

const ProjectsSection = () => {
  return (
    <div className="projects-section flex flex-col px-14 items-center">
      {/*  */}
      <div className="no80 flex flex-row flex-nowrap w-11/12 rounded-md">
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
      <div className="descriptions-1 mx-auto w-2/3 font-gunterz text-footerBg font-thin text-[30px] leading-[45px] text-center my-16">
        <p dangerouslySetInnerHTML={{ __html: projectsDescription1 }} />
        <br />
        <span className="text-5xl">HİKAYENİZİ GELEÇEĞE TAŞIYORUZ</span>
      </div>

      {/* TODO: Do Later */}
      <div className="image-slider">
        <img src={slideImgContainer} alt="Slider Background" />
      </div>

      {/*  */}
      <div className="descriptions-2 font-gunterz text-footerBg font-thin text-[30px] text-center mt-16">
        <p dangerouslySetInnerHTML={{ __html: projectsDescription2 }} />
      </div>
      {/*  */}
      <div className="map-illustration">
        <img src={mapIllustration} alt="Turkey Map Illustration" />
      </div>

      {/*  */}
      <div className="num-projects w-[700px] relative pb-32">
        <img src={tamamDevamIcon} alt="" className="w-full" />
        <span
          id="num-tamam"
          className="absolute top-[-9%] right-[29%] font-gunterz text-[95px] font-bold text-helkaBlue"
        >
          01
        </span>
        <span
          id="num-devam"
          className="absolute top-[28%] right-[29%] font-gunterz text-[95px] font-bold text-helkaOrange"
        >
          02
        </span>
      </div>
    </div>
  );
};

export default ProjectsSection;
