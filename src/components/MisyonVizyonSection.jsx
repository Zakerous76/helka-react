import React from "react";
import { kurumsalMisyonIcon, kurumsalVizyonIcon } from "../assets/images";

const MisyonVizyonSection = () => {
  return (
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
            Sahip olduğumuz altyapı ve sektörel deneyimimiz ile ülkemizin farklı
            bölgelerinde Konut ve Ticari alanlar olmak üzere irili-ufaklı
            projeleri gerçekleştirebilmek ve üretilen her projenin, her
            paydaşımız için mutluluk ve gurur nedeni olmasını sağlamak Helka
            'nın ana hedefidir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MisyonVizyonSection;
