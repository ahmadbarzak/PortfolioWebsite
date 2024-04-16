import MotionRectangleSideBar from "../AboutMe/RectangleSideBar";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <div style={{position:"absolute", left:0, top:0, backgroundColor:"#355070", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <MotionRectangleSideBar orientation="top"/>
        <motion.div style={{width: "400px", height:"330px", backgroundColor:"#344070", border: "5px solid white", display:"flex", justifyContent:"center", alignItems:"center"}}
        initial={{opacity: 0}} animate={{opacity: 1}}>
          <span style={{color:"white", fontSize:"36px", fontFamily:"roboto-serif"}}>Insert Project Here!</span>
          </motion.div>
        <MotionRectangleSideBar orientation="bottom"/>
    </div>
  );
}

export default ProjectsPage;