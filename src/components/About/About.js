import React, { useRef, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "../../css/about.css";
import svg from "../../images/character23.svg";

function About() {
    return (
        <>
            <div className="banner">
                <div className="about">
                    <h1>Aziz Chebbi</h1>
                    <div className="description">
                        <p>
                            Software engineering student, who loves competitive
                            programming and javascript development - based in
                            Tunisia
                        </p>
                        <Button
                            variant="contained"
                            onClick={() => console.log("clicked")}
                        >
                            Download CV
                        </Button>
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
