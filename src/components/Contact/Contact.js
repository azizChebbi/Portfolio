import React from "react";
import "../../css/contact.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-scroll";
import Facebook from "../../images/facebook.png";
import Linkedin from "../../images/linkedin.png";
import Github from "../../images/github.png";

function Contact() {
    return (
        <div className='contact'>
            <div>
                <div>
                    <h3>Email</h3>
                    <span>chebbim106@gmail.com</span>
                </div>
                <div>
                    <h3>Phone</h3>
                    <span>+216 27462795</span>
                </div>
                <div>
                    <h3>Adress</h3>
                    <span>Tunisia, Bn Arous</span>
                </div>
            </div>
            <div>
                <a href='https://www.facebook.com/profile.php?id=100005962092615'>
                    <img src={Facebook} />
                </a>
                <a href='https://github.com/azizChebbi'>
                    <img src={Github} />
                </a>
                <a href='https://www.linkedin.com/in/mohamed-aziz-chebbi-0387381b8/'>
                    <img src={Linkedin} />
                </a>
            </div>
            <div className='top'>
                <Link
                    activeClass='active'
                    className='link'
                    spy={true}
                    smooth={true}
                    to='about'
                    duration={200}
                    delay={100}
                >
                    <ArrowUpwardIcon />
                </Link>
            </div>
        </div>
    );
}

export default Contact;
