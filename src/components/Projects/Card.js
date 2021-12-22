import React, { useEffect } from "react";
import "../../css/card.css";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const theme = createTheme({
    palette: {
        warning: {
            main: "#ffc200",
        },
    },
});

function Card({ title, src, demo_href, github_href }) {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, []);
    const width = window.innerWidth;
    const variants =
        width > 940
            ? {
                  visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                          duration: 1,
                      },
                  },
                  hidden: {
                      opacity: 0,
                      x: 1000,
                  },
              }
            : {
                  visible: {
                      opacity: 1,
                      x: 0,
                  },
                  hidden: {
                      opacity: 1,
                      x: 0,
                  },
              };
    return (
        <motion.div className='card' variants={variants}>
            <img src={src} />
            <div>
                <h1>{title}</h1>

                <ThemeProvider theme={theme}>
                    <div className='buttons'>
                        <Button variant='outlined' color='warning'>
                            <GitHubIcon />
                            <a href={github_href}>
                                <span>Github</span>
                            </a>
                        </Button>
                        <Button variant='contained' color='error'>
                            <LiveTvRoundedIcon />
                            <a href={demo_href}>
                                <span>Demo</span>
                            </a>
                        </Button>
                    </div>
                </ThemeProvider>
            </div>
        </motion.div>
    );
}

export default Card;
