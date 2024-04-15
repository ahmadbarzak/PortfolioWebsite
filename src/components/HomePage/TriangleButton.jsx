import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';


const TriangleButton = forwardRef(
  ({ text, orientation, path }, ref) => {

  const containerStyle = {
    position: 'absolute',
    backgroundColor: "transparent",
    transformOrigin: '100% 46%',
    // transformOrigin: '100% 37%',
    bottom: 0,
    right: 0,
    display: 'flex',
    width: '500px',
    height: '500px',
    overflow: 'hidden',
    pointerEvents: 'none', 
  };

  const diamondStyle = {
    position: 'absolute',
    width: '200%',
    height: '100%',
    // bottom: '-53%',
    bottom: '-16%',
    right: '-135%',
    backgroundColor: '#03DAD9',
    transform: 'rotate(-45deg)',
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
    fontSize: '50px',
    paddingTop: '10px',
  };

  if (orientation === "top-left") {
    delete containerStyle.bottom;
    delete containerStyle.right;
    containerStyle.top = 0;
    containerStyle.left = 0;
    containerStyle.transformOrigin = '10% 58%';
    // containerStyle.transformOrigin = '10% 67%';
    delete diamondStyle.bottom;
    delete diamondStyle.right;
    diamondStyle.top = '-16%';
    diamondStyle.left = '-135%';
    diamondStyle.height = '100%';
    diamondStyle.width = '200%';
    diamondStyle.transform = 'rotate(135deg)';
    diamondStyle.backgroundColor = '#6D58B7'
    delete textStyle.paddingTop;
    delete textStyle.paddingLeft;
    textStyle.transform = 'rotate(180deg)';
    textStyle.paddingBottom = '10px';
    textStyle.color = "#FFFFFF";
    textStyle.paddingRight="12%";
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1.5 },
    },
    exit: {
      x: '150vh',
      transition: { ease: 'easeInOut' },
    }
  };

  return (
    <div style={containerStyle} ref={ref}>
      <Link to={path} style={{ textDecoration: 'none' }}>
        <div style={diamondStyle}>
          <motion.span 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={textStyle}>{text}</motion.span>
        </div>
      </Link>
    </div>
  )

})

TriangleButton.displayName = 'TriangleButton';

TriangleButton.propTypes = {
  text: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['top-left', 'bottom-right']),
  path: PropTypes.string,
};

const MotionTriangleComponent = motion(TriangleButton, { forwardMotionProps: true })

export default MotionTriangleComponent;