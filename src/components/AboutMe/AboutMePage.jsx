import MotionRectangleSideBar from './RectangleSideBar';
import MotionAboutMeCard from './AboutMeCard';
import SocialFact from './SocialFact';

const AboutMePage = () => {


  const socialFacts = [
    {
      text: "Beat Chess Grandmaster (after 63 tries)",
      icon: "king.png",
      orientation: 'left',
      style: {position: "absolute", left: "8%", transform: "translate(0%, 0%) rotate(-36deg)", top: "18%"},
    },
    {
      text: "Kareoke Master",
      icon: null,
      orientation: 'right',
      style: {position: "absolute", left: "2%", transform: "translate(0%, 0%) rotate(-26deg)", top: "35%"},
    },
    {
      text: "Love Squash and Badminton",
      icon: "racket.png",
      orientation: 'left',
      style: {position: "absolute", left: "10%", transform: "translate(0%, 0%) rotate(15deg)", top: "60%"},
    },
    {
      text: "Went to Egypt but haven't seen the pyramids",
      icon: "pyramid.png",
      style: {position: "absolute", left: "10%", top: "75%", transform: "rotate(32deg)"},
    }
  ]

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

  return (
    <div style={ styles }>
      <MotionAboutMeCard
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
        {socialFacts.map((fact, index) => {
            return (
              <SocialFact styles={fact.style} key={index} text={fact.text} icon={fact.icon} orientation={index % 2 === 0 ? 'left' : 'right'}/>
            );
          })}
    </div>

  );
};

export default AboutMePage;