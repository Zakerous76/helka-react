import styles from "../styles";
import { footerIllustrations, helkaFooterLogo } from "../assets/images";
import { footerLinks, ig_posts, motto, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`footer relative flex pb-16 flex-row w-full ${styles.paddingX} sm:pl-0 pl-0 `}
  >
    {/* Background Illustration */}
    <div className={`absolute bottom-0 left-0 w-full z-0`}>
      <img src={footerIllustrations} alt="Footer Background Illustrations" />
    </div>

    {/* Helka Logo to the left */}
    <div className="flex w-5/12 h-full justify-start">
      <img
        src={helkaFooterLogo}
        alt="Helka"
        className="w-full  object-contain"
      />
    </div>

    {/* The rest on the right */}
    <div className="pl-8 my-auto flex flex-col w-7/12 pr-20 z-10">
      <div className="title">
        <h1 className="text-white font-poppins capitalize font-semibold text-3xl pb-6 ">
          {motto}
        </h1>
        <div
          className={`${styles.flexStart} w-full border-t-2 border-dashed border-gray-500 pt-5`}
        />
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 md:mt-0 mt-10 mr-auto">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[125px]`}
            >
              <h4 className="font-poppins font-semibold text-xs text-white">
                <a
                  href={footerlink.title_link}
                  className="hover:font-bold transition-all"
                >
                  {footerlink.title}
                </a>
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <a href={link.link}>
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
        <div className="ig-posts">
          <h3 className="font-poppins font-semibold text-sm text-white">
            Instagram Posts
          </h3>

          {/* Add Instagram Post Images */}
          <div className="posts-container grid grid-cols-2 gap-2 pt-3 w-56">
            {ig_posts.map((post, index) => (
              <a href={post.link} target="_blank">
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

    <div
      className={`bg-helkaBlue absolute bottom-0 left-0 w-full flex justify-between items-center md:flex-row flex-col border-t-[1px] border-t-[#3F3E45] py-5 ${styles.paddingX}`}
    >
      <p className="font-poppins font-normal text-center text-sm text-white">
        Copyright Ⓒ 2024 by{" "}
        <a
          href="google.com"
          className="font-bold hover:text-gray-600 my-transition"
        >
          Median Digital.
        </a>{" "}
        All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer hover:scale-125 my-transition ${
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
