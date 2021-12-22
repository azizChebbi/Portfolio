import React from "react";
import { Link } from "react-scroll";

function ActiveLink({ id, handleClick, title }) {
    return (
        <Link
            activeClass='active'
            className='link'
            spy={true}
            smooth={true}
            to={id}
            duration={200}
            delay={100}
            onClick={handleClick}
        >
            {title}
        </Link>
    );
}

export default ActiveLink;
