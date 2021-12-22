import React, { useState } from "react";
import { Link } from "react-scroll";
import "../../css/header.css";
import Burger from "../../images/burger.svg";
import Close from "../../images/close.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { motion, useAnimation } from "framer-motion/dist/es/index";
import ActiveLink from "./ActiveLink";

export default function Header() {
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
    return (
        <nav>
            <div className='links'>
                {arr.map((item) => (
                    <ActiveLink id={item.toLowerCase()} handleClick={() => {}} title={item} />
                ))}
            </div>
            <div className='burger'>
                <img src={Burger} onClick={handleClick} />
            </div>
            <motion.div className='links1' initial={{ x: "100vw" }} animate={controls}>
                <div className='close'>
                    <img src={Close} onClick={handleClick} />
                </div>
                {arr.map((item) => (
                    <ActiveLink id={item.toLowerCase()} handleClick={handleClick} title={item} />
                ))}
            </motion.div>
        </nav>
    );
}
