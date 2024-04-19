import { motion } from "framer-motion"
import { PropTypes } from 'prop-types';


const Achievement = ({direction, achievement, top}) => {

    let styles = {
        zIndex: 3,
        position: "absolute",
        left: "3%",
        top: top,
        color: "#FFFFFF",
        textShadow: "0 0 6px #000000",
        fontSize: "40px",
        fontFamily: "Roboto, sans-serif"
    }

    let x = "-120vh"

    if (direction === "right") {
        x = "120vh"
        delete styles.left;
        styles.right = "3%";
        styles.textShadow = "0 0 6px #03DAD9";
    }



    return (
        <motion.span
        initial={{x:x}} animate={{x:0}} transition={{delay:1, duration:0.8}}
        style={styles}>
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
