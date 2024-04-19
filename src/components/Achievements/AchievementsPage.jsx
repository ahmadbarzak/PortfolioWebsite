import MotionBackButton from "../HomePage/BackButton";
import MotionTriangleComponent from "../TriangleButton";
import { useState } from "react";
import { motion } from "framer-motion";
import Achievement from "./Achievement";
import { achievements } from './Achievements.json';
// import Achievements from "./Achievements";


const AchievementsPage = () => {

    const [zInd, setzInd] = useState(-1);
    const [isActivated, setIsActivated] = useState(true);
    const [rotate, setRotate] = useState(0);

    return (

        <div style={{position:"absolute", zIndex:zInd, left:0, top:0, backgroundColor:"#355070", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
        
            <motion.div style={{position: "absolute", padding:0, margin:0, top:0, zIndex:1, display:"flex", alignItems:"center"}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duraction: 0.5}}>
                <motion.h1 style={{ color:"#FFFFFF", fontSize:"80px", fontFamily: "main title"}}>Achievements</motion.h1>
                <motion.img src="medal.png" style={{ marginLeft:"10px", height:"90px"}}/>
            </motion.div>

            <motion.img
            initial={{y: "30vh", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.5, duration: 1}}
            src="crowd.png" style={{zIndex:1, position: "absolute", bottom:0, left:0, right:0, width:"100vw"}}/>


            { achievements.map((achievement, index) => {
                return <Achievement key={index} direction={index % 2 === 0 ? "left" : "right"} achievement={achievement.text} top={achievement.top} />
                })
            }

            <MotionBackButton transition={{delay:4}} color="purple" clicked={() => console.log("Hello!")}/>

            <MotionTriangleComponent
            initial={{scale: 1}}
            animate={{scaleX: 4.3, scaleY: 2.25, rotateZ: rotate}}
            transition={{delay:0.5, duration: 1}}
            style={{ originX: 0 , originY: 0 }}
            onAnimationComplete={() => {
                setRotate(0)
                setzInd(0)
            }}
            text="Achievements" 
            orientation="top-left" 
            path="/achievements"
            type="animator"/>


            {isActivated && <MotionTriangleComponent
            animate={{rotateZ: 45}}
            transition={{duration: 3}}
            style={{originX: 0.5, originY: 0.7}}
            onAnimationComplete={() => setIsActivated(false)}
            text="Work Experience" 
            orientation="bottom-right" 
            path="/work-experience"
            type="animator"/>}

        </div>
    )

}

export default AchievementsPage;