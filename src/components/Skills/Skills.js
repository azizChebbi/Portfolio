import React from "react";
import Rct from "../../images/skills/skills/reactjs.svg";
import Node from "../../images/skills/skills/nodejs.svg";
import Express from "../../images/skills/skills/expressjs.svg";
import Javascript from "../../images/skills/skills/javascript.svg";
import Next from "../../images/skills/skills/nextjs.svg";
import Nest from "../../images/skills/skills/nestjs.svg";
import MySql from "../../images/skills/skills/mysql.svg";
import Mongodb from "../../images/skills/skills/mongodb.svg";
import Typescript from "../../images/skills/skills/typescript.svg";

import "../../css/skills.css";
import Skill from "./Skill";

const firstRowSkills = [
  {
    src: Rct,
  },
  {
    src: Node,
  },
  {
    src: Javascript,
  },
];
const secondRowSkills = [
  {
    src: Express,
  },
  {
    src: Next,
  },
  {
    src: Nest,
  },
];
const thirdRowSkills = [
  {
    src: Mongodb,
  },
  {
    src: Typescript,
  },
  {
    src: MySql,
  },
];

function Skills() {
  return (
    <div className="skills" id="skills">
      <div>
        <h1>Technical skills</h1>
        <div className="images">
          <div className="first-row">
            {firstRowSkills.map((skill) => (
              <Skill key={skill} src={skill.src} />
            ))}
          </div>
          <div className="second-row">
            {secondRowSkills.map((skill) => (
              <Skill key={skill} src={skill.src} />
            ))}
          </div>
          <div className="third-row">
            {thirdRowSkills.map((skill) => (
              <Skill key={skill} src={skill.src} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
