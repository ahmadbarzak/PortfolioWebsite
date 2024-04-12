import SquareButton from './SquareButton';
import TriangleButton from './TriangleButton';
import ProfileCard from './ProfileCard';
import { motion } from 'framer-motion';

const HomePage = () => {
  const styles = {
    backgroundColor: "#355070",
    minHeight: '100vh', // Ensure it covers the full height of the viewport
    minWidth: '100vw',
    display: 'flex', // Enables flexbox
    justifyContent: 'center', // Centers children along the main axis (vertical, in this case)
    alignItems: 'center', // 
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1.5 },
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut' },
    }
  };

  return (
    <motion.div style={ styles }
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit">
      <ProfileCard/>
      <TriangleButton text="Achievements" orientation="top-left" path="/achievements"/>
      <TriangleButton text="Work Experience" orientation="bottom-right" path="/work-experience"/>

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