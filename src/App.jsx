import './App.css';
import HomePage from './components/HomePage/HomePage';
import {Route, Routes, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AboutMePage from './components/AboutMe/AboutMePage';
// import MotionAboutMeCard from './components/AboutMe/AboutMeCard';
import ProjectsPage from './components/HomePage/ProjectsPage';


const App = () => {

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

  const location = useLocation();

  return (
  <AnimatePresence mode="wait">
    <Routes location={location} key={location.key}>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMePage />} />
      
      <Route path="/projects" element={<ProjectsPage/>} />

      <Route path="/achievements" element={<Link to={"/work-experience"}><motion.h1 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">Achievements</motion.h1></Link>} />

      <Route path="/work-experience" element={<Link to={"/"}><motion.h1 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">Work Experience</motion.h1></Link>} />

    </Routes>
  </AnimatePresence>
  );
};

export default App;