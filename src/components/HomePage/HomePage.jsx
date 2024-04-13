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
      transition: { delay: 0.5 },
    },
    cardExit: {
      opacity: 0,
      transition: { delay: 0.5, duration:0.5, ease: 'easeInOut' },
    }
  }; 

  // const motionTriangleButton = motion(TriangleButton, {forwardMotionProps: true})

  return (
    <motion.div style={ styles }
    variants={containerVariants}
    initial="hidden"
    animate="visible">
      <MotionProfileCard path="ahmad.jpg" text="Hi there, I&apos;m Ahmad Barzak :&#41;"
      exit={{y: '100vh', opacity: 0}}
      transition={{duration: 0.2}}
      />
      <MotionTriangleComponent exit={{rotateZ: -45, overflow: "visible" }} transition={{duration: 0.45}} text="Achievements" orientation="top-left" path="/achievements"/>
      <MotionTriangleComponent exit={{rotateZ: -45, overflow: "visible" }} transition={{duration: 0.45}} text="Work Experience" orientation="bottom-right" path="/work-experience"/>

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