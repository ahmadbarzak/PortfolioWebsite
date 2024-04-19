import MotionBackButton from "../HomePage/BackButton";
import MotionTriangleComponent from "../TriangleButton";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {

  const [zInd, setzInd] = useState(-1);

  return (
    <div style={{position:"absolute", left:0, top:0, backgroundColor:"#355070", zIndex:zInd, width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
        
        <MotionTriangleComponent 
        animate={{rotateZ: 45, overflow: "visible"}}
        transition={{ delay: 0.4, duration: 0.45}}
        onAnimationComplete={() => setzInd(0)}
        style= {{ originX: 0.65 , originY: 3.07, zIndex: 2 }}
        text="Achievements" 
        orientation="top-left" 
        path="/achievements"
        type="animator"/>
        
        <MotionBackButton transition={{delay:4}} color="purple" clicked={() => console.log("Hello!")}/>
        
        <ProjectCard/>

        <MotionTriangleComponent 
        animate={{rotateZ: 45, overflow: "visible" }}
        transition={{ delay: 0.4, duration: 0.45}}
        style= {{ originX: 0.35, originY: -1.96, zIndex: 2 }}
        text="Work Experience" 
        orientation="bottom-right" 
        path="/work-experience"
        type="animator"/>


    </div>
  );
}

export default ProjectsPage;