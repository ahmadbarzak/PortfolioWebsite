import BackButton from "../Misc/BackButton";
import TriangleButton from "../Misc/TriangleButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Achievement from "./Achievement";
import { achievements } from './Achievements.json';
import styles from '../../Styles/Achievements/AchievementsPage.module.css';
import "../../App.css";
import useScreenSize from "../../hooks/useScreenSize";
import { useReward } from "react-rewards";
import useMediaQuery from "../../hooks/useMediaQuery";

const AchievementsPage = () => {

    const [zInd, setzInd] = useState(-1);
    const [isActivated, setIsActivated] = useState(true);
    const [initialTransition, setInitialTransition] = useState(true);

    const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti');

    const mobileView = useMediaQuery('(max-width: 550px)');
    const minMobile = useMediaQuery('(min-width: 520px)');
    const maxMobile = useMediaQuery('(max-width: 580px)');
    const mobileTransition = minMobile && maxMobile;

    const screenSize = useScreenSize();
    let width = screenSize.width / 345;
    let height = screenSize.height / 345;


    
    useEffect(() => {
        if (!isConfettiAnimating) {
            setTimeout(() => {
                confettiReward();
            }, 350)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    return (
        <div className="background" style={{ zIndex: zInd }}>
            <div id="confettiReward" style={{width:"30px", height:"30px", position:"absolute", top:"-10%", zIndex:3}}></div>
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
                return <Achievement 
                key={index}
                isMobile={mobileView}
                index={index}
                direction={index % 2 === 0 ? "left" : "right"}
                achievement={achievement.text} top={achievement.top} />
                })
            }

            <BackButton color="purple" clicked={() => null}/>

            <TriangleButton
            initial={{scale: 1}}
            animate={{ scaleX:width, scaleY:!mobileView?height:height/3.4, rotateZ:!mobileView ? 0 : 45, overflow: "visible"}}
            transition={initialTransition ? {delay:0.5, duration: 1} : mobileTransition? {delay:0, duration: 0.2} : {delay:0, duration: 0}}
            style={{ originX: 0 , originY: 0 }}
            dimensionOverride={true}
            onAnimationComplete={() => {
                setzInd(0)
                setInitialTransition(false)
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