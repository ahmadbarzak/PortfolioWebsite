import ProfileCard from './ProfileCard';
import { motion } from 'framer-motion';
import TriangleButton from '../Misc/TriangleButton';
import SquareButton from '../Misc/SquareButton';
import styles from '../../Styles/HomePage/HomePage.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';
import "../../App.css";

const HomePage = () => {


  const isDesktop = useMediaQuery('(min-width: 800px)');

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.4 },
    },
    cardExit: {
      opacity: 0,
      transition: { delay: 0.5, duration:0.5, ease: 'easeInOut' },
    }
  }; 


  return (
    <motion.div className="background"
    variants={containerVariants}
    initial="hidden"
    animate="visible">
        <ProfileCard path="homePageImages/ahmad.jpg" text={isDesktop ? "Hi there, I'm Ahmad Barzak :)" : "Hi!"}
        exit={{scale: 0.5, opacity: 0, zIndex: 2}}
        transition={{duration: 0.2}}/>
      <TriangleButton transition={{duration:0.1}}  text="Achievements" orientation="top-left" dimensionOverride={false} path="/achievements"/>
      <TriangleButton transition={{duration: 0.1}} dimensionOverride={false} text="Experience" orientation="bottom-right" path="/experience"/>
      <div className={styles.bottomleft} style={{zIndex:1}}>
        <SquareButton 
        exit={{x: '-50vw', y: '50vh', opacity: 0, zIndex: 2}}
        transition={{duration: 0.2}}
        text="About Me" path="/about"/>
      </div>
      <div className={styles.topright} style={{zIndex:1}}>
        <SquareButton
        exit={{x: '50vw', y: '-50vh', opacity: 0, zIndex: 2}}
        transition={{duration: 0.2}}
        text="Projects" path="/projects"/>
      </div>
    </motion.div>
  );
};

export default HomePage;