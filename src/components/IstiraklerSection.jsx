import React from "react";
import { istiraklerSectionContainers } from "../assets/images";
import { istirakler } from "../constants";

const IstiraklerSection = () => {
  return (
    <div className="istirakler-section">
      <div className="white-bg bg-white rounded-[90px] min-h-72 px-24 mx-32 shadow-xl flex flex-col justify-center items-center mb-40">
        <div className="background-grid relative pb-16">
          <h1 className="title font-gunterz font-bold text-7xl text-helkaDarkBrown p-16 relative">
            İŞTİRAKLERİMİZ
          </h1>
          <img src={istiraklerSectionContainers} alt="" />
          <div className="texts-images flex flex-col absolute top-[200px]">
            {istirakler.map((istirak, index) => (
              <div
                key={index}
                className={`font-gunterz transition-all duration-300 ease-in-out flex gap-2 items-center mb-[50px] ${
                  index % 2 === 1 ? "flex-row-reverse" : "flex-row text-right"
                }`}
              >
                <div className="texts w-1/2">
                  <h2
                    className={`text-${istirak.title_color} font-bold text-[28px]`}
                  >
                    {istirak.title}
                  </h2>
                  <p className="font-regular text-[10px]">
                    {istirak.description}
                  </p>
                </div>
                <div className="image w-1/2">
                  <img
                    src={istirak.image}
                    alt={`${istirak.title} Image`}
                    className={`max-w-[520px] ${
                      index % 2 === 1
                        ? "pr-[50px] pl-[12px] pb-[12px] pt-[10px]"
                        : "pl-[55px] pr-[8px] pb-[10px] pt-[10px]"
                    }  `}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IstiraklerSection;
