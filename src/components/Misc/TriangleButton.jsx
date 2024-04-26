import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import { useLocation } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import { useCallback } from 'react';
// import { useState } from 'react';
// import useScreenSize from '../../hooks/useScreenSize'; 
import { useState } from 'react';
import styles from '../../Styles/Misc/TriangleButton.module.css';


const TriangleButtonComponent = forwardRef(
  ({ text, orientation, path, type, dimensionOverride}, ref) => {
  
  const position = orientation === "top-left" ? styles.topleft : styles.bottomright;
  const [overrideHeight, setOverrideHeight] = useState(`calc(max(min(70vw, 100%) - 27% + 15vh, 82%))`);
  const [height, setHeight] = useState(`calc(max(min(70vw, 100%) - 27% + 15vh, 82%))`);

  const location = useLocation(); 

  const homePage = location.pathname === "/";

  const diamondRef = useCallback(node => {
    if (node !== null) {
      const computedStyle = window.getComputedStyle(node);
      const height = computedStyle.getPropertyValue('height');
      setHeight(height);
    }
  }, []);

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

  let cursortype = "pointer";
  if (type === "animator") {
    cursortype = "default";
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

  function clickHandler(event){
      if (type === "animator") {
        event.preventDefault();
      }
  }

  return (
    <div className={`${styles.container} ${position}`} style={{zIndex:1}} ref={ref}>
      <Link to={path} style={{ textDecoration: 'none', cursor: cursortype}}  onClick={clickHandler}>
        <div ref={diamondRef} className={`${styles.diamond} ${position}`}
        style={dimensionOverride===true ? {height:overrideHeight} : !homePage? {height:height} : {}}>
          <motion.span 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          onAnimationComplete={() => dimensionOverride?setOverrideHeight("100%"):null}
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
  type: PropTypes.oneOf(['viewer', 'animator']),
  dimensionOverride: PropTypes.bool,
};

const TriangleButton = motion(TriangleButtonComponent, { forwardMotionProps: true })

export default TriangleButton;