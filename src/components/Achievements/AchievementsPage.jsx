import BackButton from "../Misc/BackButton";
import TriangleButton from "../Misc/TriangleButton";
import { useState } from "react";
import { motion } from "framer-motion";
import Achievement from "./Achievement";
import { achievements } from './Achievements.json';
import styles from '../../Styles/Achievements/AchievementsPage.module.css';
import "../../App.css";

const AchievementsPage = () => {

    const [zInd, setzInd] = useState(-1);
    const [isActivated, setIsActivated] = useState(true);
    const [rotate, setRotate] = useState(0);

    return (
        <div className="background" style={{ zIndex: zInd }}>
            <motion.div className={styles.title}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duraction: 0.5}}>
                <motion.h1>Achievements</motion.h1>
                <motion.img src="achievementImages/medal.png"/>
            </motion.div>

            <motion.img
            initial={{y: "30vh", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.5, duration: 1}}
            src="achievementImages/crowd.png" className={styles.crowd}/>


            { achievements.map((achievement, index) => {
                return <Achievement key={index} direction={index % 2 === 0 ? "left" : "right"} achievement={achievement.text} top={achievement.top} />
                })
            }

            <BackButton color="purple" clicked={() => console.log("Hello!")}/>

            <TriangleButton
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


            {isActivated && <TriangleButton
            animate={{rotateZ: 45, overflow: "visible"}}
            transition={{delay:0.5, duration: 1}}
            style={{originX: 0.6, originY: 0.65}}
            onAnimationComplete={() => setIsActivated(false)}
            text="Experience" 
            orientation="bottom-right" 
            path="/experience"
            type="animator"/>}

        </div>
    )

}

export default AchievementsPage;