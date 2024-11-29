import React from "react";
import { Hero } from "../components";
import {
  kurumsalHeroBg,
  kurumsalHeroSubtitle,
  kurumsalHeroTitle,
  kurumsalMisyonIcon,
  kurumsalVizyonIcon,
} from "../assets/images";
import { kurumsalContent } from "../constants";
import styles from "../styles";

const Kurumsal = () => {
  return (
    <div className={`${styles.flexCenter} flex-col`}>
      <Hero
        heroBg={kurumsalHeroBg}
        heroTitle={kurumsalHeroTitle}
        heroSubtitle={kurumsalHeroSubtitle}
      />
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
              } gap-5 items-center`}
            >
              <div className="text w-1/2">
                <h2 className=" font-semibold text-lg mb-2">{content.title}</h2>
                <p className="text-black font-poppins">{content.text}</p>
              </div>
              <div className="image w-1/2">
                <img src={content.image} alt="" class />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="misyon-vizyon flex flex-col gap-[20px] w-8/12 mb-40 ">
        <div className="misyon flex flex-row bg-helkaBlue rounded-[30px] p-[20px] items-center w-full">
          <div className="icon w-[400px] aspect-square mr-5 flex items-center">
            <img src={kurumsalMisyonIcon} alt="" />
          </div>
          <div className="text flex flex-col relative overflow-clip text-white">
            <h2 className="font-semibold text-[18px] font-gunterz after:content-[''] after:block after:w-full after:h-[1px] after:bg-current after:absolute after:top-[17px] after:left-[85px] after:z-0">
              Misyon
            </h2>
            <p className="font-poppins">
              İnsan hayatına konfor katacak tasarım, çevreye duyarlı,
              sürdürülebilir ve estetik kaygı prensipleri ile yaşam alanları
              kurmak kurumsal vizyon olarak belirlendi. Bu temel amaçla birlikte
              Helka, sektörüne ve şehre değer katan niteliklerde projelerin
              arkasında yer bulmaya devam edecektir.
            </p>
          </div>
        </div>
        <div className="vizyon flex flex-row-reverse bg-helkaOrange rounded-[30px] p-[20px] items-center w-full text-right">
          <div className="icon w-[360px] aspect-square flex items-center ml-5">
            <img src={kurumsalVizyonIcon} alt="" />
          </div>
          <div className="text flex flex-col relative overflow-clip text-white">
            <h2 className="font-semibold text-[18px] font-gunterz after:content-[''] after:block after:w-full after:h-[1px] after:bg-current after:absolute after:top-[17px] after:right-[79px] after:z-0">
              Vizyon
            </h2>
            <p className="font-poppins">
              Sahip olduğumuz altyapı ve sektörel deneyimimiz ile ülkemizin
              farklı bölgelerinde Konut ve Ticari alanlar olmak üzere
              irili-ufaklı projeleri gerçekleştirebilmek ve üretilen her
              projenin, her paydaşımız için mutluluk ve gurur nedeni olmasını
              sağlamak Helka 'nın ana hedefidir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kurumsal;
