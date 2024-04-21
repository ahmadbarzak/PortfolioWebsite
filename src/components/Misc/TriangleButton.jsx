import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../../Styles/Misc/TriangleButton.module.css';


const TriangleButtonComponent = forwardRef(
  ({ text, orientation, path, clicked, type}, ref) => {
  
  const position = orientation === "top-left" ? styles.topleft : styles.bottomright;

  let containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1.5 },
    },
    exit: {
      opacity: 1,
      transition: {delay:0, duration:0}
    }
  };

  if (type === "animator") {
    containerVariants = {
      initial: {
        opacity: 1,
      },
      animate: {
      opacity: 0,
      transition: { delay: 0.2, duration: 0.3 },
      },
      exit: {
        opacity: 1,
      }
    }
  }

  function clickHandler(){
    console.log(text)
    clicked(text);
  }

  return (
    <div className={`${styles.container} ${position}`} ref={ref}>
      <Link to={path} style={{ textDecoration: 'none' }} onClick={() => clickHandler()}>
        <div className={`${styles.diamond} ${position}`}>
          <motion.span 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={`${styles.text} ${position}`}>{text}</motion.span>
        </div>
      </Link>
    </div>
  )

})

TriangleButtonComponent.displayName = 'TriangleButton';

TriangleButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['top-left', 'bottom-right']),
  path: PropTypes.string,
  clicked: PropTypes.func,
  type: PropTypes.oneOf(['viewer', 'animator']),
};

const TriangleButton = motion(TriangleButtonComponent, { forwardMotionProps: true })

export default TriangleButton;