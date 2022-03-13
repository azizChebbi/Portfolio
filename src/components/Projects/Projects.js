import React, { useEffect } from "react";
import "../../css/projects.css";
import Card from "./Card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cards1 from "../../data/cards";

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
                    My Portfolio
                </motion.h1>
                <motion.div
                    ref={ref}
                    variants={variants}
                    initial="hidden"
                    animate={controls}
                >
                    {cards1.map((card) => {
                        return (
                            <Card
                                title={card.title}
                                src={card.src}
                                demo_href={card.demo_href}
                                github_href={card.github_href}
                            />
                        );
                    })}
                </motion.div>
            </div>
        </>
    );
}

export default Projects;
