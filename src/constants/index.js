import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  no0Projects80,
  no8Projects80,
  constructionIllustration,
  footerIllustrations,
  helkaFooterLogo,
  helkaHeaderLogo,
  heroBg,
  heroTitle,
  heroSubtitle,
  istiraklerSectionContainers,
  mapIcon,
} from "../assets/images";

export const navLinks = [
  // kurumsal, projeler, iştiraklerimiz, media, iletişim
  {
    id: "kurumsal",
    title: "Kurumsal",
  },
  {
    id: "projeler",
    title: "Projeler",
  },
  {
    id: "istiraklerimiz",
    title: "İştiraklerimiz",
  },
  {
    id: "medya",
    title: "Medya",
  },
];

export const footerLinks = [
  {
    title: "Kurumsal",
    title_link: "/kurumsal/",
    links: [
      {
        name: "Hakkımızda",
        link: "/kurumsal/",
      },
      {
        name: "Misyon & Vizyon",
        link: "/kurumsal/",
      },
      {
        name: "Bilgi Toplum Hizmeti",
        link: "/kurumsal/",
      },
      {
        name: "Etik Kurallarımız",
        link: "/kurumsal/",
      },
      {
        name: "Politikalarımız",
        link: "/kurumsal/",
      },
    ],
  },
  {
    title: "Projelerimiz",
    title_link: "/projeler/",
    links: [
      {
        name: "Devam Eden Projeler",
        link: "/projeler/devam-eden",
      },
      {
        name: "Tamamlanan Projeler",
        link: "/projeler/tamamlanan-eden",
      },
    ],
  },
  {
    title: "İştirakerlimiz",
    title_link: "/istirakler/",
    links: [],
  },
  {
    title: "Medya",
    title_link: "/medya/",
    links: [],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

// Useless
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
