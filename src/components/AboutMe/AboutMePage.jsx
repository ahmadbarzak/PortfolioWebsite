// import MotionRectangleSideBar from './RectangleSideBar';
import AboutMeCard from './AboutMeCard';
import SocialFact from './SocialFact';
import { socialFacts } from './socialFacts.json';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BackButton from '../Misc/BackButton';
import TriangleButton from '../Misc/TriangleButton';
import { motion } from 'framer-motion';
import Lamp from './Lamp';
import styles from '../../Styles/AboutMe/AboutMePage.module.css';
import "../../App.css";

const AboutMePage = () => {
  

  const careerObj = "I am a student who has recently graduated with a BE (Hons) in Software Engineering, " +
  "aspiring to be involved in the professional world of technology. Growing up, I was always " +
  "interested in mathematics and technology and excited by the various problems these fields have " +
  "bestowed upon us to solve." + "\n\n\nThese interests have ranged from machine learning and market-making " +
  "algorithms, to growing interests in web development. I actively enjoy critical thinking, sharing" +
  " ideas, and working as a team to contribute to projects that translate to real-world impacts"

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    }
  }

  const [type, setType] = useState('social');

  function typeSwitch(type){
    setType(type);
  }


  return (
    <div className="background">
      <AboutMeCard
      onLightClicked = {(type) => typeSwitch(type)}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      />

      <TriangleButton 
      animate={{rotateZ: -45, overflow: "visible" }}
      transition={{ delay: 0.4, duration: 0.45 }}
      style={{ originX: 0.14, originY: 0.645, zIndex: 2 }}
      text="Achievements" 
      orientation="top-left" 
      path="/achievements"
      type="animator"
      dimensionOverride={true}/>


      <TriangleButton 
      animate={{rotateZ: -45, overflow: "visible" }}
      transition={{ delay: 0.4, duration: 0.45}}
      style= {{ originX: 1, originY: 0.45, zIndex: 2 }}
      text="Experience" 
      orientation="bottom-right" 
      path="/experience"
      type="animator"
      dimensionOverride={true}/>


      <Lamp mode={type}
      exit={{y: '100vh'}}/>

      
      <BackButton clicked={() => console.log("Hey there!")} color="purple"/>

      <div className={styles.background}>
            <div className={styles.formatter}>
              {socialFacts.map((fact, index) => {
                let direction = index % 2 === 0 ? "-100vw" : '100vw'
                let rotate = fact.rotate ? fact.rotate : 0;
                return (
                  <AnimatePresence key={index}>
                  {type === "social" && <SocialFact 
                  initial={{opacity: 0, x: direction, rotateZ: 0 }}
                  animate={{opacity: 1, x: 0, rotateZ: rotate}}
                  exit={{opacity: 0, x: direction, rotateZ: 0}}
                  transition={{duration: 0.4 }}
                  styleProps={{...{color:"#FFFFFF", position:"absolute"}, ...fact.style}}
                  text={fact.text}
                  icon={fact.icon}
                  orientation={fact.orientation}
                  mode={type}/>
                  }
                </AnimatePresence>
                );
              })}


              <AnimatePresence>
                {type === "work" && (
                  <motion.div
                    initial={{ opacity: 0, y: "100vh" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100vh" }}
                    transition={{ duration: 0.4 }}
                    className={`${styles.defaultStyle}  ${styles.worktext} ${styles.left}`}
                    mode={type}
                  >
                    {careerObj}
                  </motion.div>
                )}
              </AnimatePresence>


              <AnimatePresence>
                  {type === "work" && <motion.div 
                  initial={{opacity: 0, y: "-100vh"}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: "-100vh"}}
                  transition={{duration: 0.4 }}
                  className={`${styles.defaultStyle} ${styles.worktext} ${styles.right}`}
                  mode={type}>Insert More Text Here</motion.div>
                  }
              </AnimatePresence>
              
            </div>
      </div>
    </div>

  );
};

export default AboutMePage;