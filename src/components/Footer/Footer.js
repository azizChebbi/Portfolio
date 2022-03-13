import { Button } from "@mui/material";
import React from "react";
import "../../css/footer.css";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";

function Footer() {
    return (
        <div className="footer" id="contact">
            <div className="form">
                <p>Want to hire me?</p>
                <Button variant="contained">Let's talk</Button>
                <p>chebbim106@gmail.com</p>
                <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=100005962092615">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-aziz-chebbi-0387381b8/">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href="https://github.com/azizChebbi">
                        <img src={github} alt="github" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
