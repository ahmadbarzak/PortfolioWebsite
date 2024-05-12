import BackButton from "../Misc/BackButton";
import TriangleButton from "../Misc/TriangleButton";
import { useState } from "react";
// import ProjectCard from "./ProjectCard";
import ProjectButton from "./ProjectButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import "../../App.css";
import { AnimatePresence } from "framer-motion";
import CircleButtons from "../Experience/CircleButtons";
import { motion } from "framer-motion";
import styles from '../../Styles/Projects/ProjectPage.module.css';
// import projects from "./Projects.json";
import SwiperCards from "./SwiperCards";

const ProjectsPage = () => {

  const [zInd, setzInd] = useState(-1);
  const mobileView = useMediaQuery('(max-width: 750px)');
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [unclickable, setUnclickable] = useState(false);

  const duration = 1;
  const timeout = 0.33889 * duration * 1000;

  function handleClick(expIndex) {
      setIsClicked(!isClicked);
      setUnclickable(true);
      setTimeout(() => {
          setExperienceIndex(expIndex);
          setUnclickable(false);
      }, timeout);
  }

  return (
    <div className="background" style={{zIndex:zInd, backgroundColor: "transparent"}}>
        
        <motion.div className={styles.title}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duraction: 0.5}}>
                <motion.h1>Projects</motion.h1>
                <motion.img src="projectImages/project.png"/>
        </motion.div>

        <TriangleButton 
        animate={{scaleX: 2, rotateZ: 45, overflow: "visible"}}
        transition={{ delay: 0.4, duration: 0.45}}
        onAnimationComplete={() => setzInd(0)}
        style= {{ originX: 0.65 , originY: 3.07, zIndex: 2 }}
        dimensionOverride={false}
        text="Achievements" 
        orientation="top-left" 
        path="/achievements"
        type="animator"/>

      {/* <ProjectCard repo={projects[0].repo} text={projects[0].text} play={true}/> */}

      <SwiperCards/>

      <AnimatePresence mode="sync">
        {mobileView && 
          <div>
          <ProjectButton
          initial={{x: "-50vw", opacity:0}}
          animate={{x: 0, opacity:1}}
          exit={{x: "-50vw", opacity:0}}
          transition={{delay:0, duration: 0.5}}
          size="small" direction="left" />

          <ProjectButton
          initial={{rotateZ: 180, x: "50vw", opacity:0}}
          animate={{rotateZ: 180, x: 0, opacity:1}}
          exit={{rotateZ: 180, x: "50vw", opacity:0}}
          transition={{delay:0, duration: 0.5}}
          size="small" direction="right" />

          <CircleButtons
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{delay:0, duration: 0.5}}
          propStyles={{ position:"absolute", bottom:"16%", left:"6vw"}}
          expIndex={experienceIndex}
          handleClick={(index) => handleClick(index)}
          unclickable={unclickable}
          divArray={[0, 1, 2]}
          />

          </div>}
        </AnimatePresence>

        <AnimatePresence mode="sync">
        {!mobileView && 
        <div>
          <ProjectButton
          initial={{x: "-50vw", opacity:0}}
          animate={{x: 0, opacity:1}}
          exit={{x: "-50vw", opacity:0}}
          transition={{delay:0, duration: 0.5}}
          size="large" direction="left" />

          <ProjectButton
          initial={{rotateZ: 180, x: "50vw", opacity:0}}
          animate={{rotateZ: 180, x: 0, opacity:1}}
          exit={{rotateZ: 180, x: "50vw", opacity:0}}
          transition={{delay:0, duration: 0.5}}
          size="large" direction="right" />
        </div>}
        </AnimatePresence>

        
        <BackButton transition={{delay:4}} color="turquoise" clicked={() => null}/>        


        <TriangleButton 
        animate={{scaleX: 2, rotateZ: 45, overflow: "visible" }}
        transition={{ delay: 0.4, duration: 0.45}}
        style= {{ originX: 0.35, originY: -1.96, zIndex: 2 }}
        dimensionOverride={false}
        text="Experience" 
        orientation="bottom-right" 
        path="/experience"
        type="animator"/>

    </div>
  );
}

export default ProjectsPage;