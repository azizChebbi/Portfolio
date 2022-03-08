import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Language({ delay, text, src }) {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);
    const variants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay,
                duration: 0.4,
            },
        },
        hidden: {
            y: 50,
            opacity: 0,
        },
    };
    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
        >
            <img src={src} alt="language icon" />
        </motion.div>
    );
}

export default Language;
