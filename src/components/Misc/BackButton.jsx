import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../../Styles/Misc/BackButton.module.css';


const BackButtonComponent = forwardRef(
  ({color, clicked}, ref) => {
 
  const colorStyle = color === "purple" ? styles.purple : styles.turquoise;
  const origin = color === "purple" ? {originX: 0.8, originY: 1} : {originX: 0.2, originY: 0};

  const motionVariants = 
  {
    hidden: {
      rotateZ: 30,
    },
    visible: {
      rotateZ: 0,
      transition: {delay: 1, duration: 0.4}
    },
    exit: {
      rotateZ: 30,
      transition: {duration: 0.4}
    }
  }

  function clickHandler(){
    console.log("Back");
    clicked("Back");
  }

  return (
    <motion.div 
    variants={motionVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className={`${styles.container} ${colorStyle}`}
    style={origin}
    ref={ref}>
      <Link to="/" style={{ textDecoration: 'none' }} onClick={() => clickHandler()}>
        <div className={`${styles.diamond} ${colorStyle}`}>
          <span className={`${styles.text} ${colorStyle}`}>Back</span>
        </div>
      </Link>
    </motion.div>
  )

})

BackButtonComponent.displayName = 'TriangleButton';

BackButtonComponent.propTypes = {
  path: PropTypes.string,
  clicked: PropTypes.func,
  color: PropTypes.oneOf(['purple', 'turquoise']),
};

const BackButton = motion(BackButtonComponent, { forwardMotionProps: true })

export default BackButton;