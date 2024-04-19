import './App.css';
import {Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectsPage from './components/Projects/ProjectsPage';
import HomePage from './components/HomePage/HomePage';
import AboutMePage from './components/AboutMe/AboutMePage';
import AchievementsPage from './components/Achievements/AchievementsPage';


const App = () => {

  const location = useLocation();

  return (
  <AnimatePresence mode="sync">
    <Routes location={location} key={location.key}>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMePage />} />
      
      <Route path="/projects" element={<ProjectsPage/>} />

      <Route path="/achievements" element={<AchievementsPage/>} />

      <Route path="/work-experience" element={<motion.img
            initial={{y: "30vh", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.5, duration: 1}}
            src="crowd.png" style={{zIndex:1, position: "absolute", bottom:0, left:0, right:0, width:"100vw"}}/>} />

    </Routes>
  </AnimatePresence>
  );
};

export default App;