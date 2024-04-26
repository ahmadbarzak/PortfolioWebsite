import { motion } from "framer-motion"
import { PropTypes } from 'prop-types';
import styles from '../../Styles/Achievements/Achievement.module.css';
import { useState } from "react";

const Achievement = ({direction, achievement, top, isMobile, index}) => {

    const [isInitial, setIsInitial] = useState(true)

    const x = direction === "left" ? "-120vw" : "120vw"
    const classMode = direction === "left" ? styles.left : styles.right;

    let translate = direction==="left"?70:-70;
    translate = Math.floor(translate + Math.floor(index/2)*10);
    translate = "translateY(" + translate + "px)"

    return (
        <motion.span
        initial={{x:x}}
        animate={!isMobile?{x:0, transform:"translateY(0)"}:{x:0, transform:translate}}
        transition={isInitial?{delay:1, duration:0.8}:{}}
        className={`${styles.achievement} ${classMode}`}
        onAnimationComplete={() => setIsInitial(false)}
        style={{top:top}}>
            {achievement}
        </motion.span>
    )

}

Achievement.propTypes = {
    direction: PropTypes.oneOf(["left", "right"]).isRequired,
    achievement: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    isMobile: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired
}

export default Achievement;
