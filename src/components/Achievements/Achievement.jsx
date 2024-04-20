import { motion } from "framer-motion"
import { PropTypes } from 'prop-types';
import styles from "./Styles/Achievement.module.css"

const Achievement = ({direction, achievement, top}) => {

    const x = direction === "left" ? "-120vh" : "120vh"
    const classMode = direction === "left" ? styles.left : styles.right

    return (
        <motion.span
        initial={{x:x}} animate={{x:0}} transition={{delay:1, duration:0.8}}
        className={`${styles.achievement} ${classMode}`}
        style={{top:top}}>
            {achievement}
        </motion.span>
    )

}

Achievement.propTypes = {
    direction: PropTypes.oneOf(["left", "right"]).isRequired,
    achievement: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired
}

export default Achievement;
