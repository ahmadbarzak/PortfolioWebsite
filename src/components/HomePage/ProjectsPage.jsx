import { motion } from "framer-motion";
import MotionBackButton from "./BackButton";
import MotionTriangleComponent from "./TriangleButton";
import { useState } from "react";

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
        
        <MotionBackButton color="purple" clicked={() => console.log("Hello!")}/>
        <motion.div style={{width: "400px", height:"330px", backgroundColor:"#344070", border: "5px solid white", display:"flex", justifyContent:"center", alignItems:"center"}}
        initial={{scale:0.5, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{delay:0.6, duration:0.2}}>
          <span style={{color:"white", fontSize:"36px", fontFamily:"roboto-serif"}}>Insert Project Here!</span>
          </motion.div>

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