import { Button } from "@mui/material";
import React from "react";
import "../../css/contact.css";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";

function Footer() {
    return (
        <div className="footer">
            <div className="seperator"></div>
            <div className="form">
                <p>Want to hire me</p>
                <Button variant="contained">Let's talk</Button>
                <div className="icons">
                    <img src={facebook} alt="facebook" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={github} alt="github" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
