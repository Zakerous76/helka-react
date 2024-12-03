import React from "react";
import styles from "../styles";

const ProjelerKategoriler = () => {
  return (
    <div
      className={`projeler-kategoriler ${styles.flexCenter} flex-col font-gunterz relative my-12`}
    >
      <h1 className="mb-8 text-4xl font-bold">KATEGORİLER</h1>
      <div className="flex flex-row gap-8 text-white text-center">
        <div className="p-4 bg-helkaOrange rounded-lg shadow-md  px-14 hover:scale-110 hover:shadow-helkaOrange my-transition">
          <h2 className="text-xl font-bold">DEVAM EDEN PROJELER</h2>
        </div>
        <div className="p-4 bg-helkaBlue rounded-lg shadow-md px-14 hover:scale-110 hover:shadow-helkaBlue my-transition">
          <h2 className="text-xl font-bold">TAMAMLANAN PROJELER</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjelerKategoriler;
