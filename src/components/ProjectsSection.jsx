import React, { useEffect, useState } from "react";
import {
  constructionIllustration,
  mapIllustration,
  no0Projects80,
  no8Projects80,
  slideImgContainer,
  tamamDevamIcon,
} from "../assets/images";
import {
  projectsDescription1,
  projectsDescription2,
  projectsSliderImages,
} from "../constants";
import ImageSlider from "./ImageSlider";

const ProjectsSection = () => {
  const [tamam, setTamam] = useState(0);
  const [devam, setDevam] = useState(0);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const totalTamam = 13;
  const totalDevam = 18;

  useEffect(() => {
    if (!inView || hasAnimated) return;

    const totalFramesTamam = totalTamam; // Maximum value for tamam
    const totalFramesDevam = totalDevam; // Maximum value for devam
    const duration = 1500; // 1.5 seconds
    const intervalTamam = duration / totalFramesTamam;
    const intervalDevam = duration / totalFramesDevam;

    let currentTamam = 0;
    let currentDevam = 0;

    const intervalTamamId = setInterval(() => {
      if (currentTamam >= totalFramesTamam) {
        clearInterval(intervalTamamId);
      } else {
        setTamam((prev) => prev + 1);
        currentTamam++;
      }
    }, intervalTamam);

    const intervalDevamId = setInterval(() => {
      if (currentDevam >= totalFramesDevam) {
        clearInterval(intervalDevamId);
      } else {
        setDevam((prev) => prev + 1);
        currentDevam++;
      }
    }, intervalDevam);
    setHasAnimated(true); // Mark animation as complete

    return () => {
      clearInterval(intervalTamamId);
      clearInterval(intervalDevamId);
    };
  }, [inView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setInView(false);
        } else {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(".num-projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-section flex flex-col relative px-14 items-center">
      {/*  */}
      <div className="no80 flex relative flex-row flex-nowrap w-full sm:w-11/12 rounded-md overflow-hidden top-[-30px]">
        <div className="no8 relative ml-24 ">
          <img src={no8Projects80} alt="Number 8 of 80" className="" />
          <span className="top-text absolute font-gunterz text-white top-[15px] left-[15px] sm:top-[15px] sm:left-[30px] lg:top-[30px] lg:left-[40px] text-[16px] sm:text-[24px] lg:text-[40px]">
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
          <span className="top-text absolute font-gunterz bottom-[10px] right-[16px] sm:right-[30px] lg:right-[40px] sm:text-[16px] lg:text-[32px] text-white">
            'DEN FAZLA PROJE
          </span>
        </div>
      </div>

      {/*  */}
      <div className="descriptions-1 mx-auto w-2/3 font-gunterz text-footerBg font-thin text-[30px] leading-[45px] text-center my-10">
        <p dangerouslySetInnerHTML={{ __html: projectsDescription1 }} />
        <br />
        <span className="text-[40px]">HİKAYENİZİ GELEÇEĞE TAŞIYORUZ</span>
      </div>

      {/* TODO: Do Later */}
      <div className="image-slider w-[340px] xs:w-2/3">
        {/* <img src={slideImgContainer} alt="Slider Background" /> */}
        <ImageSlider projectsSliderImages={projectsSliderImages} />
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
          {tamam.toString().padStart(2, "0")}
        </span>
        <span
          id="num-devam"
          className="absolute top-[28%] right-[29%] font-gunterz text-[95px] font-bold text-helkaOrange"
        >
          {devam.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default ProjectsSection;
