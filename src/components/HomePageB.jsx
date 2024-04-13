import SquareButton from './SquareButton';
import MotionProfileCard from './HomePage/ProfileCard';
import MotionRectangleSideBar from './AboutMe/RectangleSideBar';
import { motion } from 'framer-motion';



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
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.86, },
    },
  };

  // const motionTriangleButton = motion(TriangleButton, {forwardMotionProps: true})

  return (
    <motion.div style={ styles }>
      <MotionProfileCard
      variants={containerVariants}
      exit="exit"
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