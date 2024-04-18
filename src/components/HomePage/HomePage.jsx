import MotionProfileCard from './ProfileCard';
import { motion } from 'framer-motion';
import MotionTriangleComponent from './TriangleButton';
import { useState } from 'react';
import MotionSquareButton from '../SquareButton';

const HomePage = () => {
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
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5 },
    },
    cardExit: {
      opacity: 0,
      transition: { delay: 0.5, duration:0.5, ease: 'easeInOut' },
    }
  }; 

  const [exitVars, setExitVars] = useState({
    animVars: {rotateZ: -45, overflow: "visible" },
    animStyleLeft:{ originX: 0.1, originY: 0.58 },
    animStyleRight:{ originX: 1, originY: 0.46 },
    cardExit:{y: '100vh', opacity: 0},
    lSquareExit: {x: '-50vw', y: '50vh', opacity: 0, zIndex: 2},
    rSquareExit: {x: '50vw', y: '-50vh', opacity: 0, zIndex: 2},
  });

  function exitHandler(animType){
    if (animType === "About Me") {
      console.log("About Me")
      setExitVars({
        animVars: {rotateZ: -45, overflow: "visible" },
        animStyleLeft: { originX: 0.14, originY: 0.645 },
        animStyleRight: { originX: 1, originY: 0.45 },
        cardExit: {y: '100vh', opacity: 0},
        lSquareExit: {x: '-50vw', y: '50vh', opacity: 0, zIndex: 2},
        rSquareExit: {x: '50vw', y: '-50vh', opacity: 0, zIndex: 2}
      });
    }
    else if (animType === "Projects") {
      console.log("Projects")
      setExitVars({
        animVars: {},
        animStyleLeft: {},
        animStyleRight: {},
        cardExit: {scale: 0.5, opacity: 0, zIndex: 2},
        lSquareExit: {x: '-50vw', y: '50vh', opacity: 0, zIndex: 2},
        rSquareExit: {x: '50vw', y: '-50vh', opacity: 0, zIndex: 2}
      });
    }
    else if (animType === "Achievements") {
      console.log("Achievements")
      setExitVars({
        animVars: {rotateZ: 15, overflow: "visible" },
        animStyleLeft: {},
        animStyleRight: {},
        cardExit: {opacity: 0},
        lSquareExit: {x: '-50vw', y: '50vh', opacity: 0, zIndex: 2},
        rSquareExit: {x: '50vw', y: '-50vh', opacity: 0, zIndex: 2}
      });
    }
    else if (animType === "Work Experience") {
      console.log("Work Experience")
      setExitVars({
        animVars: {rotateZ: 45, overflow: "visible" },
        animStyleLeft: {},
        animStyleRight: {},
        cardExit: {opacity: 0},
        lSquareExit: {x: '-50vw', y: '50vh', opacity: 0, zIndex: 2},
        rSquareExit: {x: '50vw', y: '-50vh', opacity: 0, zIndex: 2}
      });
    }
  }

  return (
    <motion.div style={ styles }
    variants={containerVariants}
    initial="hidden"
    animate="visible">
      <MotionProfileCard path="ahmad.jpg" text="Hi there, I&apos;m Ahmad Barzak :&#41;"
      exit={exitVars.cardExit}
      transition={{duration: 0.2}}
      />
      <MotionTriangleComponent transition={{duration:0.1}} clicked={(animType)=>exitHandler(animType)} text="Achievements" orientation="top-left" path="/achievements"/>
      {/* <MotionTriangleComponent exit={{rotateZ: -45, overflow: "visible" }} transition={{duration: 4}} text="Achievements" orientation="top-left" path="/achievements"/> */}
      {/* <MotionTriangleComponent exit={exitVars.animVars} transition={{duration: 0.45}} style={exitVars.animStyleRight} clicked={(animType)=>exitHandler(animType)} text="Work Experience" orientation="bottom-right" path="/work-experience"/> */}
      <MotionTriangleComponent transition={{duration: 0.1}} clicked={(animType)=>exitHandler(animType)} text="Work Experience" orientation="bottom-right" path="/work-experience"/>

      <div style={{position: 'absolute', bottom: '10%',left: '10%'}}>
        <MotionSquareButton 
        exit={exitVars.lSquareExit}
        transition={{duration: 0.2}}
        clicked={(animType)=>exitHandler(animType)} text="About Me" path="/about"/>
      </div>
      <div style={{position: 'absolute', top: '10%',right: '10%'}}>
        <MotionSquareButton
        exit={exitVars.rSquareExit}
        transition={{duration: 0.2}}
        clicked={(animType)=>exitHandler(animType)} text="Projects" path="/projects"/>
      </div>
    </motion.div>
  );
};

export default HomePage;