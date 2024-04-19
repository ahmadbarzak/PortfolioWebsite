// import MotionRectangleSideBar from './RectangleSideBar';
import MotionAboutMeCard from './AboutMeCard';
import MotionSocialFact from './SocialFact';
import { socialFacts } from './socialFacts.json';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MotionBackButton from '../BackButton';
import MotionTriangleComponent from '../TriangleButton';
import Lamp from './Lamp';

const AboutMePage = () => {
  
  const defaultStyle = {
    color: "#FFFFFF",
    position: "absolute",
  }

  const styles = {
    position: "relative",
    backgroundColor: "#355070",
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: "hidden"
  };

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
    <div style={styles}>
      <MotionAboutMeCard
      onLightClicked = {(type) => typeSwitch(type)}
      style={{position: "absolute", top:"0%"}}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      />

      <MotionTriangleComponent 
      animate={{rotateZ: -45, overflow: "visible" }}
      transition={{ delay: 0.4, duration: 0.45 }}
      style={{ originX: 0.14, originY: 0.645, zIndex: 2 }}
      text="Achievements" 
      orientation="top-left" 
      path="/achievements"
      type="animator"/>


      <MotionTriangleComponent 
      animate={{rotateZ: -45, overflow: "visible" }}
      transition={{ delay: 0.4, duration: 0.45}}
      style= {{ originX: 1, originY: 0.45, zIndex: 2 }}
      text="Work Experience" 
      orientation="bottom-right" 
      path="/work-experience"
      type="animator"/>


      <Lamp mode={type}
      exit={{y: '100vh'}}/>

      
      <MotionBackButton clicked={() => console.log("Hey there!")} color="purple"/>

      <div style={{width:"100%", height:"100%", backgroundColor: "transparent"}}>
            <div style={{position:"absolute", top:0, width:"100%", bottom:0, overflow:"hidden"}}>
              {socialFacts.map((fact, index) => {
                
                let direction = index % 2 === 0 ? "-100vw" : '100vw'
                let rotate = fact.rotate ? fact.rotate : 0;
                
                return (
                  <AnimatePresence key={index}>
                  {type === "social" && <MotionSocialFact 
                  initial={{opacity: 0, x: direction, rotateZ: 0 }}
                  animate={{opacity: 1, x: 0, rotateZ: rotate}}
                  exit={{opacity: 0, x: direction, rotateZ: 0}}
                  transition={{duration: 0.4 }}
                  styles={ {...defaultStyle, ...fact.style} }
                  text={fact.text}
                  icon={fact.icon}
                  orientation={fact.orientation}
                  mode={type}/>
                  }
                </AnimatePresence>
                );
              })}
            </div>
      </div>
    </div>

  );
};

export default AboutMePage;