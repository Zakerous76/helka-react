import React from "react";
import { Hero } from "../components";
import {
  iletisimHeroBg,
  iletisimHeroSubtitle,
  iletisimHeroTitle,
} from "../assets/images";
import styles from "../styles";
import { contactInfo } from "../constants";
import ContactForm from "../components/ContactForm";

const Iletisim = () => {
  return (
    <div>
      <Hero
        heroBg={iletisimHeroBg}
        heroTitle={iletisimHeroTitle}
        heroSubtitle={iletisimHeroSubtitle}
      />
      <div className={`${styles.flexCenter} flex-row flex-wrap font-poppins`}>
        {contactInfo.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-[350px] h-[350px] bg-white border shadow-sm p-6 mx-3 my-10 gap-4"
          >
            <card.icon className="w-16 h-16 text-helkaBrown mb-4" />
            <h3 className="text-xl font-poppins font-semibold text-helkaDarkBrown text-center">
              {card.title}
            </h3>
            <p
              className="text-xs text-gray-600 text-center"
              dangerouslySetInnerHTML={{ __html: card.content }}
            />
          </div>
        ))}
      </div>
      <ContactForm />
    </div>
  );
};

export default Iletisim;
