import React from "react";
import Button from "@mui/material/Button";
import Svg from "../../images/about.svg";
import "../../css/about.css";
import { motion } from "framer-motion";

import TextTransition, { presets } from "react-text-transition";
import { Link } from "react-router-dom";

function About() {
    const divVariants = {
        visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
        hidden: { opacity: 0 },
    };
    const imgVariants = {
        visible: { x: 0, transition: { duration: 1 } },
        hidden: { x: -700 },
    };
    const TEXTS = ["Software engineer", "Student", "Web developer"];
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className='about' id='about'>
            <motion.div
                className='about-description'
                variants={divVariants}
                initial='hidden'
                animate='visible'
            >
                <div>
                    <h1>Hey folks, I'm a</h1>
                    <h1>
                        <TextTransition
                            text={TEXTS[index % TEXTS.length]}
                            springConfig={presets.gentle}
                            noOverflow
                        />
                    </h1>
                </div>
                <p>
                    Building a successful product is a challenge. I am highly energetic in user
                    experience design, interfaces and web development.
                </p>
                <div>
                    <Button variant='contained'>
                        <Link
                            to='./Aziz_Chebbi_CV.pdf'
                            target='_blank'
                            download
                            style={{ color: "white", textDecoration: "none" }}
                        >
                            Download The resume
                        </Link>
                    </Button>
                </div>
            </motion.div>
            <motion.div
                className='about-svg'
                variants={imgVariants}
                animate='visible'
                initial='hidden'
            >
                <img src={Svg} />
            </motion.div>
        </div>
    );
}

export default About;
