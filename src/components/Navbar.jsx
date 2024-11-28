import React, { useState } from "react";
import { navLinks } from "../constants";
import { close, helkaHeaderLogo, menu } from "../assets/images";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="w-full absolute left-0 z-20 flex py-6 justify-between items-center navbar px-6">
        <a
          href="/"
          className="w-1/5 sm:w-1/12 h-14 hover:scale-125 my-transition "
        >
          <img src={helkaHeaderLogo} alt="helka" className="w-full h-14 " />
        </a>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-gunterz font-normal text-white cursor-pointer text-[12px] ${
                index === navLinks.length - 1 ? "mr-10" : "mr-10"
              } hover:scale-125 hover:font-bold my-transition`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white opacity-70 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-md sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-gunterz font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-black" : "text-gray-400"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-b from-black to-transparent z-10 opacity-60"></div>
    </>
  );
};

export default Navbar;
