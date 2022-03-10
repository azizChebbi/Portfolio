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
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);
    const variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
        hidden: {
            opacity: 0,
            y: 100,
        },
    };

    return (
        <motion.div className="card" variants={variants}>
            <img src={src} />
            <div>
                <h1>{title}</h1>

                <ThemeProvider theme={theme}>
                    <div className="buttons">
                        <Button variant="contained" color="primary">
                            See more
                        </Button>
                    </div>
                </ThemeProvider>
            </div>
        </motion.div>
    );
}

export default Card;
