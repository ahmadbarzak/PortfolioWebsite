import './App.css';
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, useMotionValue } from 'framer-motion';
// import ProjectsPage from './components/Projects/ProjectsPage';
import DraggableLight from './components/AboutMe/DraggableLight';
import HomePage from './components/HomePage/HomePage';
import AboutMePage from './components/AboutMe/AboutMePage';
// import AchievementsPage from './components/Achievements/AchievementsPage';
import ExperiencePage from './components/Experience/ExperiencePage';
import useMediaQuery from './hooks/useMediaQuery';
import TetrisBackground from './components/Misc/TetrisBackground';
import IncreaseSizeComponent from './components/Misc/IncreaseSizeComponent';
import Light from './components/AboutMe/Light';
// import Example from './components/AboutMe/live2d';
import {shape, shape_morphed} from './components/AboutMe/lightPath';


// const Light = ({pathIndex, progress, paths, opacity}) => {




const App = () => {

  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(0);
  const paths = [shape, shape_morphed]
  const opacity = useMotionValue(1);


  const isBigEnough = useMediaQuery('(min-height: 500px)');

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
              {isBigEnough && <AboutMePage/>}
              {!isBigEnough && <IncreaseSizeComponent/>}
            </div>
          }/>
          
          <Route path="/projects" element={
            <div>
              <DraggableLight/>
              {/* {isBigEnough && <ProjectsPage/>} */}
              {/* {!isBigEnough && <IncreaseSizeComponent/>} */}
            </div>
          }/>

          <Route path="/achievements" element={
            <div>
              <Light
              pathIndex={pathIndex}
              progress={progress}
              paths={paths}
              opacity={opacity} />
              {/* {isBigEnough && <AchievementsPage/>} */}
              {/* {!isBigEnough && <IncreaseSizeComponent/>} */}
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