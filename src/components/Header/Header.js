import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import "../../css/header.css";
// import Burger from "../../images/burger.svg";
// import Close from "../../images/close.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { motion, useAnimation } from "framer-motion/dist/es/index";
import ActiveLink from "./ActiveLink";
import Avatar from "@mui/material/Avatar";
import aziz from "../../images/aziz.png";

export default function Header() {
    const nav = useRef(null);
    const [hide, setHide] = useState(true);
    const controls = useAnimation();
    const handleClick = () => {
        const hide_style = {
            x: "100vw",
        };
        const show_style = {
            x: 0,
        };
        controls.start(hide ? show_style : hide_style);
        setHide(!hide);
    };
    const arr = ["About", "Skills", "Experience", "Projects", "Activities"];
    window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        // nav.current.classList.add("active");
        if (window.scrollY > 50) {
            document.querySelector("nav").classList.add("active");
        } else {
            document.querySelector("nav").classList.remove("active");
        }
    });
    return (
        <nav>
            <div className="bar" ref={nav}>
                <div>
                    <Avatar
                        alt="Remy Sharp"
                        src={aziz}
                        sx={{ width: 56, height: 56 }}
                    />
                    <h1>AZIZ</h1>
                </div>

                <div className="links">
                    {arr.map((item) => (
                        <ActiveLink
                            id={item.toLowerCase()}
                            handleClick={() => {}}
                            title={item}
                        />
                    ))}
                </div>
            </div>

            {/* <div className='burger'>
                <img src={Burger} onClick={handleClick} />
            </div> */}

            <motion.div
                className="links1"
                initial={{ x: "100vw" }}
                animate={controls}
            >
                {/* 
                <div className="close">
                    <img src={Close} onClick={handleClick} />
                </div>
                */}
                {arr.map((item) => (
                    <ActiveLink
                        id={item.toLowerCase()}
                        handleClick={handleClick}
                        title={item}
                    />
                ))}
            </motion.div>
        </nav>
    );
}
