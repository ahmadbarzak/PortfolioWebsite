import './App.css';
import HomePage from './components/HomePage/HomePage';
import HomePageB from './components/HomePageB';
import {Route, Routes, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';


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
  <AnimatePresence>
    <Routes location={location} key={location.key}>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/about" element={<HomePageB />} />
      
      <Route path="/projects" element={<Link to={"/achievements"}><motion.h1 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">Projects</motion.h1></Link>} />

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