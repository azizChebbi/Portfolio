import React, { useRef, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "../../css/about.css";
import svg from "../../images/character23.svg";

function About() {
    return (
        <div className="banner">
            <div className="about">
                <div>
                    <p>
                        Hi, I'm{" "}
                        <span>
                            Aziz Chebbi
                            <br />
                        </span>
                        Software Engineering Student.
                    </p>
                    <p>
                        I'm a full-stack JavaScript developer with strong focus
                        on <b>React</b> alongside with <b>Next</b>.I love
                        creating scalable web applications with high performance
                        and user experience.
                    </p>
                    <Button
                        variant="contained"
                        onClick={() => console.log("clicked")}
                    >
                        Download CV
                    </Button>
                </div>
                <div className="svg">
                    <img src={svg} />
                </div>
            </div>
        </div>
    );
}

export default About;
