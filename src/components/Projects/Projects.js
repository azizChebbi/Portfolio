import React, { useEffect } from "react";
import "../../css/projects.css";
import Card from "./Card";
import Netflix from "../../images/netflix.jpeg";
import Messenger from "../../images/messenger.webp";
import Portfolio from "../../images/portfolio.jpg";
import Ecommerce from "../../images/ecommerce.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    const width = window.innerWidth;
    const variants =
        width > 940
            ? {
                  visible: {
                      opacity: 1,
                      transition: {
                          when: "beforeChildren",
                          staggerChildren: 0.3,
                      },
                  },
                  hidden: {
                      opacity: 0,
                      transition: {
                          when: "afterChildren",
                      },
                  },
              }
            : {
                  visible: {
                      opacity: 1,
                  },
                  hidden: {
                      opacity: 1,
                  },
              };
    const header = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.5,
            },
        },
        hidden: {
            y: -100,
            opacity: 0,
        },
    };
    return (
        <>
            <div className="projects" id="projects">
                <motion.h1
                    variants={header}
                    initial="hidden"
                    animate={controls}
                >
                    Projects
                </motion.h1>
                <motion.div
                    ref={ref}
                    variants={variants}
                    initial="hidden"
                    animate={controls}
                >
                    <Card
                        title={"E-commerce"}
                        src={Ecommerce}
                        demo_href={"https://e-commerce-azizchebbi.vercel.app/"}
                        github_href={"https://github.com/azizChebbi/e-commerce"}
                    />
                    <Card
                        title={"Netflix"}
                        src={Netflix}
                        demo_href={"https://movies-series-bb260.web.app"}
                        github_href={"https://github.com/azizChebbi/Netflix"}
                    />
                    <Card
                        title={"Messenger"}
                        src={Messenger}
                        demo_href={"https://messanger-5c4be.web.app/"}
                        github_href={
                            "https://github.com/azizChebbi/Messenger_app"
                        }
                    />
                    <Card
                        title={"Portfolio"}
                        src={Portfolio}
                        demo_href={window.location.href}
                        github_href={"https://github.com/azizChebbi/Portfolio"}
                    />
                </motion.div>
            </div>
        </>
    );
}

export default Projects;
