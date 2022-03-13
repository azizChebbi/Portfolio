import React from "react";
import Language from "./Language";
import Rct from "../../images/react.svg";
import Node from "../../images/node.svg";
import Cpp from "../../images/cpp.svg";
import MySql from "../../images/mysql.svg";
import Mongodb from "../../images/mongodb.svg";
import Typescript from "../../images/typescript.svg";
import "../../css/skills.css";

const languages = [
    {
        text: "React",
        src: Rct,
        delay: 0.4,
    },
    {
        text: "React",
        src: Rct,
        delay: 0.4,
    },
];

function Skills() {
    return (
        <div className="skills" id="skills">
            <h1>Technical skills</h1>
            <div className="languages">
                <div>
                    <Language text="React" src={Rct} delay={0.4}></Language>
                </div>
                <div>
                    <Language text="Node" src={Node} delay={0.4}></Language>
                    <Language
                        text="Next"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                        delay={0.4}
                    ></Language>
                </div>
                <div>
                    <Language
                        text="Express"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                        delay={0.4}
                    ></Language>

                    <Language
                        text="MongoDB"
                        src={Mongodb}
                        delay={0.4}
                    ></Language>
                    <Language
                        text="TypeScript"
                        src={Typescript}
                        delay={0.4}
                    ></Language>
                </div>
                <div>
                    <Language text="Cpp" src={Cpp} delay={0.4}></Language>
                    <Language text="MySql" src={MySql} delay={0.4}></Language>
                </div>
                <div>
                    <Language
                        text="Java"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                        delay={0.4}
                    ></Language>
                </div>
            </div>
        </div>
    );
}

export default Skills;
