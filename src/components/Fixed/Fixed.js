import React, { useEffect, useRef } from "react";
import "../../css/app.css";
import email from "../../images/email.png";
import { motion } from "framer-motion";

function Fixed() {
    const cursor = useRef(null);

    return (
        <>
            <div
                className="email"
                drag
                /*dragSnapToOrigin
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}*/
            >
                <img src={email} alt="email" />
            </div>
        </>
    );
}

export default Fixed;
