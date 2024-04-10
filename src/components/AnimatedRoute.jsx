import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const AnimatedRoute = ({ children }) => {
  const nodeRef = useRef();
  const location = useLocation();

  useEffect(() => {
    // Add a class that starts the enter animation
    nodeRef.current.classList.add('page-enter');
    // Remove the class after the animation completes
    const timer = setTimeout(() => {
      nodeRef.current.classList.remove('page-enter');
    }, 1000); // Duration of your animation
    return () => clearTimeout(timer);
  }, [location]);

  return <div ref={nodeRef}>{children}</div>;
};

AnimatedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedRoute;

