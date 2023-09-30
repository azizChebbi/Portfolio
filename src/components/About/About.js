import React from "react";
import Button from "@mui/material/Button";
import "../../css/about.css";
import svg from "../../images/character23.svg";
function About() {
  return (
    <div className="banner">
      <div className="about">
        <div>
          <div>
            <p>
              Hi, I'm{" "}
              <span>
                Aziz Chebbi,
                <br />
              </span>
              a Software Engineer.
            </p>
          </div>
          <div>
            <p>
              I'm a <span style={{ color: "white" }}>Software engineer</span>, competitive programmer{" "}
              <br className="about-br" /> and a MERN developer. I love creating high performance{" "}
              <br className="about-br" /> applications using the power of JavaScript and I'm always{" "}
              <br className="about-br" /> looking for great opportunities and new challenges.
            </p>
          </div>
          <a href="/Cv.pdf" target="_blank">
            <Button variant="contained">Download CV</Button>
          </a>
        </div>
      </div>
      <div className="big-circle">
        <div className="small-circle">
          <div>
            <p>A full-stack experience</p>
            <p>
              That brings
              <br /> together
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
