import MotionRectangleSideBar from './RectangleSideBar';
import MotionAboutMeCard from './AboutMeCard';
import SocialFact from './SocialFact';
import { socialFacts } from './socialFacts.json';
import { useState } from 'react';
import Lamp from './Lamp';


const AboutMePage = () => {

  // let type = "social";
  
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
      <div style={{width:"100%", height:"100%", backgroundColor: "transparent"}}>
        {type === "social" && 
            <div style={{position:"absolute", top:0, width:"100%", bottom:0, overflow:"hidden"}}>
              {socialFacts.map((fact, index) => {
                return (
                  <SocialFact styles={ {...defaultStyle, ...fact.style} } key={index} text={fact.text} icon={fact.icon} orientation={index % 2 === 0 ? 'left' : 'right'}/>
                );
                })
              }
            </div>
        }
      </div>

      </div>

  );
};

export default AboutMePage;