import Netflix from "../images/netflix.jpeg";
import Messenger from "../images/messenger.jpeg";
import Portfolio from "../images/portfolio.jpg";
import Ecommerce from "../images/ecommerce.png";

const cards = [
    {
        title: "E-commerce website, built using Next.js",
        src: Ecommerce,
        demo_href: "https://e-commerce-azizchebbi.vercel.app/",
        github_href: "https://github.com/azizChebbi/e-commerce",
    },
    {
        title: "SPA application using React with Responsive design",
        src: Netflix,
        demo_href: "https://movies-series-bb260.web.app",
        github_href: "https://github.com/azizChebbi/Netflix",
    },
    {
        title: "Real time chat application on top of Node/Socket.io",
        src: Messenger,
        demo_href: "https://messanger-5c4be.web.app/",
        github_href: "https://github.com/azizChebbi/Messenger_app",
    },
    {
        title: "This portfolio website  with the source code",
        src: Portfolio,
        demo_href: window.location.href,
        github_href: "https://github.com/azizChebbi/Portfolio",
    },
];

export default cards;
