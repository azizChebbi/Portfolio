import React from "react";
import Button from "@mui/material/Button";
import "../../css/about.css";
import facebook from "../../images/facebook.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import email from "../../images/email.png";
import svg from "../../images/character23.svg";

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
        <>
            <div className="email">
                <img src={email} alt="email" />
            </div>
            <div className="banner">
                <div className="about">
                    <h1>Aziz Chebbi</h1>
                    <div>
                        <div className="description">
                            <p>
                                Software engineering student, who loves
                                competitive programming and javascript
                                development - based in Tunisia
                            </p>
                            <Button variant="contained">Download CV</Button>
                        </div>
                    </div>
                </div>
                <div className="svg">
                    <img src={svg} />
                </div>
                <div className="seperator"></div>
            </div>
        </>
    );
}

export default About;
