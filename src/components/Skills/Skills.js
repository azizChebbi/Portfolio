import React from "react";
import LanguageImage from "./LanguageImage";
import Rct from "../../images/react.svg";
import Node from "../../images/node.svg";
import Cpp from "../../images/cpp.svg";
import MySql from "../../images/mysql.svg";
import Mongodb from "../../images/mongodb.svg";
import Express from "../../images/express.svg";
import Typescript from "../../images/typescript.svg";

import "../../css/skills.css";

function Skills() {
    return (
        <div className='skills' id='skills'>
            <h1>Technical skills</h1>
            <div>
                <LanguageImage delay={0.4}>
                    <img alt='skill image' src={Rct} />
                </LanguageImage>
                <LanguageImage delay={0.2}>
                    <img alt='skill image' src={Node} />
                </LanguageImage>
                <LanguageImage delay={0.7}>
                    <img alt='skill image' src={Cpp} />
                </LanguageImage>
                <LanguageImage delay={0.6}>
                    <img alt='skill image' src={MySql} />
                </LanguageImage>
                <LanguageImage delay={0.1}>
                    <img alt='skill image' src={Mongodb} />
                </LanguageImage>
                <LanguageImage delay={0.5}>
                    <img alt='skill image' src={Typescript} />
                </LanguageImage>
                <LanguageImage delay={0.3}>
                    <img alt='skill image' src={Express} />
                </LanguageImage>
            </div>
        </div>
    );
}

export default Skills;
