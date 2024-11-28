import styles from "../styles";
import { footerIllustrations, helkaFooterLogo } from "../assets/images";
import { footerLinks, ig_posts, motto, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`footer relative flex pb-16 flex-col sm:flex-row w-full sm:px-16 pl-0 items-center`}
  >
    {/* Background Illustration */}
    <div className={`absolute bottom-0 left-0 w-full z-0 `}>
      <img src={footerIllustrations} alt="Footer Background Illustrations" />
    </div>

    {/* Helka Logo to the left */}
    <div className="hidden sm:flex w-5/12 h-[450px] justify-start pr-7">
      <img
        src={helkaFooterLogo}
        alt="Helka"
        className="w-full  object-contain"
      />
    </div>

    {/* The rest on the right */}
    <div className="my-auto flex flex-col w-full sm:w-7/12 max-w-[660px] px-4 sm:pl-8 sm:pr-20 z-10">
      <div className="title">
        <h1 className="text-white font-poppins capitalize font-bold text-4xl py-6 ">
          {motto}
        </h1>
        <div
          className={`${styles.flexStart} w-full border-t-2 border-dashed border-gray-500 pt-5`}
        />
      </div>

      <div className="flex justify-center flex-col sm:flex-row">
        <div className="flex flex-row flex-wrap mr-auto justify-evenly sm:justify-normal">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[125px]`}
            >
              <h4 className="font-poppins font-semibold text-sm text-white">
                <a
                  href={footerlink.title_link}
                  className="hover:font-bold transition-all"
                >
                  {footerlink.title}
                </a>
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <a href={link.link} key={link.name}>
                    <li
                      key={link.name}
                      className={`font-poppins font-light text-[11px] text-gray-400 hover:font-bold cursor-pointer transition-all ${
                        index !== footerlink.links.length - 1 ? "mb-2" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ig-posts flex flex-col sm:flex-none items-center sm:items-baseline border-t-2 border-dashed border-gray-500 sm:border-none pt-4 sm:pt-0">
          <h3 className="font-poppins font-semibold text-sm text-white">
            Instagram
          </h3>

          {/* Add Instagram Post Images */}
          <div className="posts-container grid grid-cols-2 gap-2 pt-3 w-56">
            {ig_posts.map((post, index) => (
              <a href={post.link} target="_blank" key={post.id}>
                <img
                  key={index}
                  src={post.image}
                  alt={"Instagram Post - " + index}
                  className="object-contain w-full hover:scale-105 transition-all hover:cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Helka Logo to the left */}
    <div className="sm:hidden flex w-full h-full justify-start pr-7 mb-4">
      <img
        src={helkaFooterLogo}
        alt="Helka"
        className="w-full object-contain"
      />
    </div>

    <div
      className={`bg-helkaBlue absolute bottom-0 left-0 w-full flex flex-col sm:flex-row justify-between items-center py-5 ${styles.paddingX}`}
    >
      <p className="font-poppins font-normal text-center text-xs text-white mb-4 sm:mb-0">
        Copyright Ⓒ 2024 by{" "}
        <a
          href="google.com"
          className="font-bold hover:text-gray-600 my-transition"
        >
          Median Digital.
        </a>{" "}
        All Rights Reserved.
      </p>

      <div className="flex flex-row *:mt-0 ">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[18px] h-[18px] object-contain cursor-pointer hover:scale-125 my-transition ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);
export default Footer;
