import BackButton from "../Misc/BackButton";
import TriangleButton from "../Misc/TriangleButton";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "../../App.css";

const ProjectsPage = () => {

  const [zInd, setzInd] = useState(-1);

  return (
    <div className="background" style={{zIndex:zInd, backgroundColor: "transparent"}}>
        
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
        
        <BackButton transition={{delay:4}} color="turquoise" clicked={() => null}/>        

        <ProjectCard/>

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