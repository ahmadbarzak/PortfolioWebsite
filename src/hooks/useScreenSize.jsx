import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height:  Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width:  Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height:  Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      });
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;