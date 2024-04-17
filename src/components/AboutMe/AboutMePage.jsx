import MotionRectangleSideBar from './RectangleSideBar';
import MotionAboutMeCard from './AboutMeCard';
import MotionSocialFact from './SocialFact';
import { socialFacts } from './socialFacts.json';
import { useState } from 'react';
import Lamp from './Lamp';
import { AnimatePresence } from 'framer-motion';
import MotionBackButton from '../HomePage/BackButton';


const AboutMePage = () => {
  
  const defaultStyle = {
    color: "#FFFFFF",
    position: "absolute",
  }

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh',
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    enter: {
      y: '10vh',
      transition: { duration: 0.2 },
    }
  }

  // const factVariants = {
  //   hidden: {
  //     opacity: 0,
  //     x: '-100vw',
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { duration: 0.2 },
  //   },
  // }

  const [type, setType] = useState('social');

  function typeSwitch(type){
    setType(type);
  }


  return (
    <div style={styles}>
      <MotionAboutMeCard
      onLightClicked = {(type) => typeSwitch(type)}
      style={{position: "absolute", top:"0%"}}
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
      <Lamp mode={type}/>

      <MotionBackButton 
      clicked={() => console.log("Hey there!")} color="purple"/>
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
                  transition={{ duration: 0.4 }}
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