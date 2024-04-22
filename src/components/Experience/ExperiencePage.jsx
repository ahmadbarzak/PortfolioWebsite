import BackButton from "../Misc/BackButton";
import TriangleButton from "../Misc/TriangleButton";
import { useState } from "react";
import { motion } from "framer-motion";
import "../../App.css"


const ExperiencePage = () => {

    const [zInd, setzInd] = useState(-1);
    const [isActivated, setIsActivated] = useState(true);

    return (

        <div className="background" style={{zIndex:zInd}}>
        
            <motion.div style={{position: "absolute", padding:0, margin:0, top:0, zIndex:1, display:"flex", alignItems:"center"}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duraction: 0.5}}>
                <div style={{zIndex: 2, display:"flex", alignItems:"center"}} >
                <motion.h1 style={{ color:"#FFFFFF", fontSize:"80px", fontFamily: "main title"}}>Experience</motion.h1>
                <motion.img src="experienceImages/briefcase.png" style={{ marginLeft:"10px", height:"90px"}}/>
                </div>
            </motion.div>

            <BackButton color="turquoise" clicked={() => console.log("Hello!")}/>

            {isActivated && <TriangleButton
            initial={{opacity: 1}}
            animate={{rotateZ: 45, opacity:0, overflow: "visible"}}
            transition={{delay:0.5, duration: 0.8}}
            style={{originX: 0.6, originY: 0.65}}
            onAnimationComplete={() => setIsActivated(false)}
            text="Achievements" 
            orientation="top-left" 
            path="/achievements"
            type="animator"/>}


            <TriangleButton
            initial={{scale: 1}}
            animate={{scaleX: 4.02, scaleY: 2.1}}
            transition={{delay:0.5, duration: 1}}
            style={{originX: 1, originY: 1}}
            onAnimationComplete={() => {
                setzInd(0)
            }}
            text="Experience" 
            orientation="bottom-right" 
            path="/experience"
            type="animator"/>

        </div>
    )

}

export default ExperiencePage;