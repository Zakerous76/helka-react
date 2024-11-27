import React from "react";
import { istiraklerSectionContainers } from "../assets/images";
import { istirakler } from "../constants";

const IstiraklerSection = () => {
  return (
    <div className="istirakler-section">
      <div className="white-bg bg-white rounded-[90px] min-h-72 px-24 mx-32 shadow-xl flex flex-col justify-center items-center relative">
        <div className="title font-gunterz font-bold text-7xl text-helkaDarkBrown p-16">
          <h1>İştirakerlimiz</h1>
        </div>
        <div className="background-grid">
          <img src={istiraklerSectionContainers} alt="" />
        </div>
        <div className="texts-images flex flex-col">
          {/* a dynamic way to fetch texts 
        the tile and the body must have different transition*/}
          {istirakler.map((istirak, index) => (
            <div
              key={index}
              className={`font-gunterz transition-all duration-300 ease-in-out flex gap-2   items-center mb-[30px] ${
                index % 2 === 1 ? "flex-row-reverse" : "flex-row text-right"
              }`}
            >
              <div className="texts w-1/2">
                <h2 className={`text-${istirak.title_color}`}>
                  {istirak.title}
                </h2>
                <p>{istirak.description}</p>
              </div>
              <div className="image w-1/2">
                <img src={istirak.image} alt={`${istirak.title} Image`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IstiraklerSection;
