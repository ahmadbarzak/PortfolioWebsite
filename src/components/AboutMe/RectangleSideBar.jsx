import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const RectangleSideBar = forwardRef(
  ({orientation }, ref) => {
  // Inline styles
  const containerStyle = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: 0,
    width: '62px',
    overflow: 'visible', 
    borderLeft: '5px solid white',
    backgroundColor: '#03DAD9'
  };

  if (orientation === "left") {
    delete containerStyle.right;
    delete containerStyle.borderLeft;
    containerStyle.borderRight = "5px solid white";
    containerStyle.left = 0;
    containerStyle.backgroundColor = '#03DAD9';
    containerStyle.backgroundColor = '#6D58B7';
  }


  return (
    <div style={containerStyle} ref={ref}></div>
  )

})

RectangleSideBar.displayName = 'RectangleSideBar';

RectangleSideBar.propTypes = {
  orientation: PropTypes.oneOf(['left', 'right']),
};

const MotionRectangleSideBar = motion(RectangleSideBar, { forwardMotionProps: true })

export default MotionRectangleSideBar;