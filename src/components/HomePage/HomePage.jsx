import SquareButton from '../SquareButton';
import MotionProfileCard from './ProfileCard';
import { motion } from 'framer-motion';
import MotionTriangleComponent from './TriangleButton';

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
      transition: { delay: 0.5, duration: 1.5 },
    },
    cardExit: {
      y: '100vh',
      transition: { ease: 'easeInOut' },
    }
  }; 

  // const motionTriangleButton = motion(TriangleButton, {forwardMotionProps: true})

  return (
    <motion.div style={ styles }
    variants={containerVariants}
    initial="hidden"
    animate="visible">
      <MotionProfileCard
      variants={containerVariants}
      exit="cardExit"
      />
      <MotionTriangleComponent exit={{rotateZ: -45 }} transition={{delay: 0, duration: 1}} text="Achievements" orientation="top-left" path="/achievements"/>
      <MotionTriangleComponent exit={{rotateZ: -45 }} transition={{delay: 0, duration: 1}} text="Work Experience" orientation="bottom-right" path="/work-experience"/>

      <div style={{position: 'absolute', bottom: '10%',left: '10%'}}>
        <SquareButton text="About Me" path="/about"/>
      </div>
      <div style={{position: 'absolute', top: '10%',right: '10%'}}>
        <SquareButton text="Projects" path="/projects"/>
      </div>
    </motion.div>
  );
};

export default HomePage;