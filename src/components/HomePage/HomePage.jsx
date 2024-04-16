import SquareButton from '../SquareButton';
import MotionProfileCard from './ProfileCard';
import { motion } from 'framer-motion';
import MotionTriangleComponent from './TriangleButton';
import { useState } from 'react';

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
    profExit:{y: '100vh', opacity: 0}
  });

  function exitHandler(animType){
    console.log(animType)
    if (animType === "About Me") {
      console.log("About Me")
      setExitVars({
        animVars: {rotateZ: -45, overflow: "visible" },
        animStyleLeft: { originX: 0.14, originY: 0.645 },
        animStyleRight: { originX: 1, originY: 0.45 },
        profExit: {y: '100vh', opacity: 0}
      });
    }
    else if (animType === "Projects") {
      console.log("Projects")
      setExitVars({
        animVars: {rotateZ: 45, overflow: "visible"},
        animStyleLeft: { originX: 0.65 , originY: 3.07},
        animStyleRight: { originX: 0.35, originY: -1.96 },
        profExit: {scale: 0.6, x:'-50vw', y: '20vh', opacity: 0}
      });
    }
    else if (animType === "Achievements") {
      console.log("Achievements")
      setExitVars({
        animVars: {rotateZ: 15, overflow: "visible" },
        animStyleLeft: {},
        animStyleRight: {},
        profExit: {opacity: 0}
      });
    }
    else if (animType === "Work Experience") {
      console.log("Work Experience")
      setExitVars({
        animVars: {rotateZ: 45, overflow: "visible" },
        animStyleLeft: {},
        animStyleRight: {},
        profExit: {opacity: 0}
      });
    }
  }

  return (
    <motion.div style={ styles }
    variants={containerVariants}
    initial="hidden"
    animate="visible">
      <MotionProfileCard path="ahmad.jpg" text="Hi there, I&apos;m Ahmad Barzak :&#41;"
      exit={exitVars.profExit}
      transition={{duration: 0.2}}
      />
      <MotionTriangleComponent exit={exitVars.animVars} transition={{duration: 0.45}} style={exitVars.animStyleLeft} clicked={(animType)=>exitHandler(animType)} text="Achievements" orientation="top-left" path="/achievements"/>
      {/* <MotionTriangleComponent exit={{rotateZ: -45, overflow: "visible" }} transition={{duration: 4}} text="Achievements" orientation="top-left" path="/achievements"/> */}
      <MotionTriangleComponent exit={exitVars.animVars} transition={{duration: 0.45}} style={exitVars.animStyleRight} clicked={(animType)=>exitHandler(animType)} text="Work Experience" orientation="bottom-right" path="/work-experience"/>

      <div style={{position: 'absolute', bottom: '10%',left: '10%'}}>
        <SquareButton clicked={(animType)=>exitHandler(animType)} text="About Me" path="/about"/>
      </div>
      <div style={{position: 'absolute', top: '10%',right: '10%'}}>
        <SquareButton clicked={(animType)=>exitHandler(animType)} text="Projects" path="/projects"/>
      </div>
    </motion.div>
  );
};

export default HomePage;