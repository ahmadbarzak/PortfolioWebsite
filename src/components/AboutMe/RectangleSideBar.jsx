import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const RectangleSideBar = forwardRef(
  ({orientation }, ref) => {

  const containerStyle = {
    zIndex: 1,
    position: 'absolute',
    // width: '62px',
    overflow: 'visible', 
  };

  if (orientation === "right") {
    containerStyle.width = '4.3%';
    containerStyle.bottom = 0;
    containerStyle.top = 0;
    containerStyle.right = 0;
    containerStyle.borderLeft = '5px solid white';
    containerStyle.backgroundColor = '#03DAD9';
  }

  if (orientation === "left") {
    containerStyle.width = '4.3%';
    containerStyle.bottom = 0;
    containerStyle.top = 0;
    containerStyle.left = 0;
    containerStyle.borderRight = "5px solid white";
    containerStyle.backgroundColor = '#6D58B7';
  }

if (orientation === "top") {
    delete containerStyle.width;
    containerStyle.height = '18%';
    containerStyle.left = 0;
    containerStyle.right = 0;
    containerStyle.top = 0;
    containerStyle.borderBottom = "5px solid white";
    containerStyle.backgroundColor = '#6D58B7';
  }

  if (orientation === "bottom") {
    delete containerStyle.width;
    containerStyle.height = '18%';
    containerStyle.left = 0;
    containerStyle.right = 0;
    containerStyle.bottom = 0;
    containerStyle.borderTop = "5px solid white";
    containerStyle.backgroundColor = '#03DAD9';
  }


  return (
    <div style={containerStyle} ref={ref}></div>
  )

})

RectangleSideBar.displayName = 'RectangleSideBar';

RectangleSideBar.propTypes = {
  orientation: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
};

const MotionRectangleSideBar = motion(RectangleSideBar, { forwardMotionProps: true })

export default MotionRectangleSideBar;