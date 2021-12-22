import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function LanguageImage({ delay, children }) {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    const variants = {
        visible: {
            scale: 1,
            transition: {
                delay,
            },
        },
        hidden: {
            scale: 0,
        },
    };
    return (
        <motion.div ref={ref} variants={variants} initial='hidden' animate={controls}>
            {children}
        </motion.div>
    );
}

export default LanguageImage;
