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
    backgroundColor: '#03DAD9',
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
    color: '#355070',
    paddingLeft: '7%',
    fontSize: '33px',
    paddingTop: '10px',
  };

  if (color === "purple") {
    diamondStyle.backgroundColor = "#6D58B7";
    textStyle.color = "#F1E9DB";
  }


  function clickHandler(){
    console.log("Back");
    clicked("Back");
  }

  return (
    <motion.div 
    initial={{rotateZ: 30 }}
    animate={{rotateZ: 0}}
    transition={{duration: 0.4}}
    style={{...{originX: 0.8, originY: 1, backgroundColor:"red"}, ...containerStyle}}
    exit={{rotateZ: 30}}
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