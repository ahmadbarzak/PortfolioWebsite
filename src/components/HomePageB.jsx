import SquareButton from './SquareButton';
import MotionProfileCard from './HomePage/ProfileCard';
import MotionRectangleSideBar from './AboutMe/RectangleSideBar';
import { motion } from 'framer-motion';
// import { useState } from 'react';


const HomePageB = () => {
  const styles = {
    backgroundColor: "#355070",
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
    },
  };

  // const [animationState, setAnimationState] = useState("visible");
  // const cardVariants = {
  //   hiddencard: {
  //     opacity: 0,
  //   },
  //   visiblecard: {
  //     opacity: 1,
  //     transition: { delay: 1, duration: 0.4 },
  //   },
  // };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1, duration: 0.3 },
    },
    enter: {
      y: '10vh',
      transition: { duration: 0.3 },
    }
  }

  // onAnimationComplete={() => {
  //   if (animationState === "visible") {
  //     setAnimationState("enter");
  //   }
  // }}

  // const motionTriangleButton = motion(TriangleButton, {forwardMotionProps: true})

  return (
    <motion.div style={ styles }>
      <MotionProfileCard path = "gnomes.jpg"
      text = "You've been gnomed!"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit={{y: '100vh'}}
      />
      <MotionRectangleSideBar
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      orientation="left"/>
      <MotionRectangleSideBar     
      variants={containerVariants}
      initial="hidden" 
      animate="visible" 
      orientation="right"/>

      <div style={{position: 'absolute', bottom: '10%',left: '10%'}}>
        <SquareButton text="About Me" path="/about"/>
      </div>
      <div style={{position: 'absolute', top: '10%',right: '10%'}}>
        <SquareButton text="Projects" path="/projects"/>
      </div>
    </motion.div>
  );
};

export default HomePageB;