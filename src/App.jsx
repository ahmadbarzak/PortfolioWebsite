import './App.css';
import {Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProjectsPage from './components/Projects/ProjectsPage';
import HomePage from './components/HomePage/HomePage';
import AboutMePage from './components/AboutMe/AboutMePage';
import AchievementsPage from './components/Achievements/AchievementsPage';
import ExperiencePage from './components/Experience/ExperiencePage';


const App = () => {

  const location = useLocation();

  return (
  <AnimatePresence mode="sync">
    <Routes location={location} key={location.key}>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMePage />} />
      
      <Route path="/projects" element={<ProjectsPage/>} />

      <Route path="/achievements" element={<AchievementsPage/>} />

      <Route path="/experience" element={<ExperiencePage/>} />

    </Routes>
  </AnimatePresence>
  );
};

export default App;