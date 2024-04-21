import BackButton from "../Misc/BackButton";
import TriangleButton from "../Misc/TriangleButton";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from '../../Styles/Projects/ProjectsPage.module.css';

const ProjectsPage = () => {

  const [zInd, setzInd] = useState(-1);

  return (
    <div className={styles.page} style={{zIndex:zInd}}>
        
        <TriangleButton 
        animate={{rotateZ: 45, overflow: "visible"}}
        transition={{ delay: 0.4, duration: 0.45}}
        onAnimationComplete={() => setzInd(0)}
        style= {{ originX: 0.65 , originY: 3.07, zIndex: 2 }}
        text="Achievements" 
        orientation="top-left" 
        path="/achievements"
        type="animator"/>
        
        <BackButton transition={{delay:4}} color="turquoise" clicked={() => console.log("Hello!")}/>        

        <ProjectCard/>

        <TriangleButton 
        animate={{rotateZ: 45, overflow: "visible" }}
        transition={{ delay: 0.4, duration: 0.45}}
        style= {{ originX: 0.35, originY: -1.96, zIndex: 2 }}
        text="Experience" 
        orientation="bottom-right" 
        path="/experience"
        type="animator"/>

    </div>
  );
}

export default ProjectsPage;