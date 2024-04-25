import './App.css';
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectsPage from './components/Projects/ProjectsPage';
import HomePage from './components/HomePage/HomePage';
import AboutMePage from './components/AboutMe/AboutMePage';
import AchievementsPage from './components/Achievements/AchievementsPage';
import ExperiencePage from './components/Experience/ExperiencePage';
import useMediaQuery from './hooks/useMediaQuery';
import TetrisBackground from './components/Misc/TetrisBackground';
import MobilePlaceholder from './components/Misc/MobilePlaceholder';
import IncreaseSizeComponent from './components/Misc/IncreaseSizeComponent';

const App = () => {

  const isBigEnough = useMediaQuery('(min-height: 500px)');
  const mobileView = useMediaQuery('(max-width: 550px)');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    if (sessionStorage.getItem('isReloaded') && location.pathname !== "/") {
      navigate("/")
    } else {
      sessionStorage.setItem('isReloaded', 'true');
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

      <div >
      <TetrisBackground/>
      <AnimatePresence initial={false} mode="sync">
        <Routes location={location} key={location.key}>
          
          <Route exact path="/" element={
            <div>
              {isBigEnough && <HomePage/>}
              {!isBigEnough && <IncreaseSizeComponent/>}
            </div>
          }/>

          <Route path="/about" element={
            <div>
              {(!mobileView&&isBigEnough) && <AboutMePage/>}
              {mobileView && <MobilePlaceholder/>}
              {!isBigEnough && <IncreaseSizeComponent/>}
            </div>
          }/>
          
          <Route path="/projects" element={
            <div>
              {!mobileView && <ProjectsPage/>}
              {mobileView && <MobilePlaceholder/>}
              {!isBigEnough && <IncreaseSizeComponent/>}
            </div>
          }/>

          <Route path="/achievements" element={
            <div>
              {isBigEnough && <AchievementsPage/>}
              {!isBigEnough && <IncreaseSizeComponent/>}
            </div>
          }/>

          <Route path="/experience" element={
            <div>
              {isBigEnough && <ExperiencePage/>}
              {!isBigEnough && <IncreaseSizeComponent/>}
            </div>
          }/>

        </Routes>
      </AnimatePresence>
      </div>
  );
};

export default App;