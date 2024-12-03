import React from "react";
import { kurumsalContent } from "../constants";
import styles from "../styles";

const HakkimizdaSection = () => {
  return (
    <div
      className={`description bg-white text-black rounded-[60px] relative font-gunterz w-10/12 ${styles.flexCenter} flex-col my-20`}
    >
      <h1 className="title bg-white font-semibold text-[50px] absolute top-[-50px] px-[8px] rounded-lg">
        Hakkımızda
      </h1>
      <div className="flex flex-col p-[50px]">
        {kurumsalContent.map((content, index) => (
          <div
            key={content.id}
            className={`flex flex-row ${
              index % 2 === 0 ? "text-right" : "flex-row-reverse"
            } gap-7 items-center`}
          >
            <div className="text w-1/2">
              <h2 className=" font-semibold text-[14px] mb-2">
                {content.title}
              </h2>
              <p className="text-black font-poppins">{content.text}</p>
            </div>
            <div className="image w-1/2">
              <img src={content.image} alt="" class />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HakkimizdaSection;
