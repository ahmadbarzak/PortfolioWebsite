import MotionProfileCard from './ProfileCard';
import { motion } from 'framer-motion';
import MotionTriangleComponent from '../TriangleButton';
import { useState } from 'react';
import MotionSquareButton from '../SquareButton';
import styles from '../../Styles/HomePage/HomePage.module.css';

const HomePage = () => {

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
    <motion.div className={styles.default}
    variants={containerVariants}
    initial="hidden"
    animate="visible">
      <MotionProfileCard path="homePageImages/ahmad.jpg" text="Hi there, I&apos;m Ahmad Barzak :&#41;"
      exit={exitVars.cardExit}
      transition={{duration: 0.2}}
      />
      <MotionTriangleComponent transition={{duration:0.1}} clicked={(animType)=>exitHandler(animType)} text="Achievements" orientation="top-left" path="/achievements"/>
      <MotionTriangleComponent transition={{duration: 0.1}} clicked={(animType)=>exitHandler(animType)} text="Work Experience" orientation="bottom-right" path="/work-experience"/>

      <div className={styles.bottomleft}>
        <MotionSquareButton 
        exit={exitVars.lSquareExit}
        transition={{duration: 0.2}}
        clicked={(animType)=>exitHandler(animType)} text="About Me" path="/about"/>
      </div>
      <div className={styles.topright}>
        <MotionSquareButton
        exit={exitVars.rSquareExit}
        transition={{duration: 0.2}}
        clicked={(animType)=>exitHandler(animType)} text="Projects" path="/projects"/>
      </div>
    </motion.div>
  );
};

export default HomePage;