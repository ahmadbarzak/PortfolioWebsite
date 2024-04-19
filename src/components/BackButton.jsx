import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';


const BackButton = forwardRef(
  ({color, clicked}, ref) => {

  const containerStyle = {
    position: 'absolute',
    backgroundColor: "transparent",
    zIndex: 3,
    // transformOrigin: '100% 46%',
    // transformOrigin: '100% 37%',
    bottom: 0,
    right: 0,
    display: 'flex',
    width: '1200px',
    height: '500px',
    overflow: "hidden",
    pointerEvents: 'none', 
  };

  const diamondStyle = {
    position: 'absolute',
    width: '200%',
    height: '100%',
    // bottom: '-53%',
    transform: "rotate(-30deg)",
    bottom: '20%',
    right: '-175%',
    backgroundColor: '#6D58B7',
    display: 'flex',
    margin: 'auto',
    placeContent: 'start center',
    justifyContent: 'left',
    alignItems: 'flex-start',
    pointerEvents: 'auto',
    border: '5px solid white',
    
  };

  const textStyle = {
    fontFamily: 'Roboto-Serif',
    color: "#F8F8FF",
    paddingLeft: '7%',
    fontSize: '33px',
    paddingTop: '10px',
  };

  let origin = {originX: 0.8, originY: 1};

  if (color === "turquoise") {
    textStyle.color = "#355070";
    diamondStyle.backgroundColor = "#03DAD9";
    delete containerStyle.bottom
    delete containerStyle.right
    containerStyle.top = 0
    containerStyle.left = 0
    delete diamondStyle.bottom
    delete diamondStyle.right
    diamondStyle.top = "20%"
    diamondStyle.left = "-175%"
    diamondStyle.transform = 'rotate(150deg)';
    delete textStyle.paddingLeft
    textStyle.paddingRight = '7%';
    delete textStyle.paddingTop
    textStyle.paddingBottom = '10px';
    textStyle.transform = 'rotate(180deg)';

    origin = {originX: 0.2, originY: 0};
  }


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
    style={{...origin, ...containerStyle}}
    ref={ref}>
      <Link to="/" style={{ textDecoration: 'none' }} onClick={() => clickHandler()}>
        <div style={diamondStyle}>
          <span
          style={textStyle}>Back</span>
        </div>
      </Link>
    </motion.div>
  )

})

BackButton.displayName = 'TriangleButton';

BackButton.propTypes = {
  path: PropTypes.string,
  clicked: PropTypes.func,
  color: PropTypes.oneOf(['purple', 'turquoise']),
};

const MotionBackButton = motion(BackButton, { forwardMotionProps: true })

export default MotionBackButton;