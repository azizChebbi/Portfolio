import React, { useEffect } from "react";
import "../../css/card.css";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { createTheme } from "@mui/material/styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const theme = createTheme({
    palette: {
        warning: {
            main: "#ffc200",
        },
    },
});

function Card({ title, src, github_href, demo_href }) {
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
            <div className="image">
                <img src={src} />
            </div>
            <p>{title}</p>
            <div className="buttons">
                <a href={demo_href}>
                    <Button variant="contained">
                        <RemoveRedEyeOutlinedIcon /> {"  "}
                        <span>Live preview</span>
                    </Button>
                </a>
                <a href={github_href}>
                    <Button variant="contained">
                        <GitHubIcon />
                        <span>Github</span>
                        {"  "}
                    </Button>
                </a>
            </div>
        </motion.div>
    );
}

export default Card;
