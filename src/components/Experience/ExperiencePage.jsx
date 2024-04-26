import BackButton from "../Misc/BackButton";
import TriangleButton from "../Misc/TriangleButton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../App.css";
import useScreenSize from "../../hooks/useScreenSize";
import styles from '../../Styles/Experience/ExperiencePage.module.css';
import Work from "./Work";
import Education from "./Education";
import Leadership from "./Leadership";

const ExperiencePage = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [zInd, setzInd] = useState(-1);
    const [isActivated, setIsActivated] = useState(true);
    const [initialTransition, setInitialTransition] = useState(true);
    const [flipIndex, setFlipIndex] = useState(0);
    const [experienceIndex, setExperienceIndex] = useState(0);
    const [isInitial, setIsInitial] = useState(true);
    const [initialStyle, setInitialStyle] = useState(true);
    const [unclickable, setUnclickable] = useState(false);


    useEffect(() => {

        const duration = 1;
        const timeout = 0.33889 * duration * 1000;
        setTimeout(() => {
            setIsInitial(false);
            setTimeout(() => {
                setInitialStyle(false);
            }, timeout);
        }, 2000);


    }, []); 

    const screenSize = useScreenSize();

    let width = screenSize.width / 100;
    let height = screenSize.height / 365;

    const duration = 1;
    const timeout = 0.33889 * duration * 1000;

    function handleClick(expIndex) {
        setIsClicked(!isClicked);
        setUnclickable(true);
        setTimeout(() => {
            setFlipIndex((flipIndex + 1)%6);
            setExperienceIndex(expIndex);
        }, timeout);
    }

    const variants = {

        hidden: {
            opacity: 0,
            y: 100
        },
        initialise: {
            opacity: 1,
            y: 0,
            // transition: {duration: 1}
        },
            
        notClicked: {
            rotateX: 180
        },
        clicked: {
            rotateX: 0
        }
    }



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

            <BackButton color="turquoise" clicked={() => null}/>

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

            <div className={styles.experienceCard}>
            <motion.div 
            variants={variants}
            initial={isInitial?"hidden":"initialise"}
            animate={isInitial?"initialise":isClicked ? "clicked" : "notClicked"}
            onAnimationComplete={() => setUnclickable(false)}
            transition = {{delay:isInitial?1:0, duration: duration}}
            className={styles.card}
            style={initialStyle?{backgroundColor: "#03DAD9"}:{backgroundColor: "#6D58B7"}}
            >
                <div style={initialStyle?{color: "#355070", transform:"scale(1, 1)"}:flipIndex%2===0 ? {transform: "scale(1, -1)"} : {transform: "scale(1, 1)"}}>
                    {initialStyle?"Hello!":experienceIndex%3===0?<Work/>:experienceIndex%3===1?<Education/>:<Leadership/>}
                </div>
            </motion.div>

            <motion.div className={styles.circleContainer}
            variants={variants}
            initial="hidden"
            animate="initialise"
            transition={{delay:1, duration:1}} >
                <div className={`${styles.circle} ${unclickable?styles.duringclick : experienceIndex===0?styles.clicked : styles.notclicked}`}
                onClick={()=>handleClick(0)}></div>
                <div className={`${styles.circle} ${unclickable?styles.duringclick : experienceIndex===1?styles.clicked : styles.notclicked}`}
                onClick={()=>handleClick(1)}></div>
                <div className={`${styles.circle} ${unclickable?styles.duringclick : experienceIndex===2?styles.clicked : styles.notclicked}`}
                onClick={()=>handleClick(2)}></div>
            </motion.div>

            </div>

            <TriangleButton
            initial={{scale: 1}}
            animate={{scaleX:width, scaleY:height, rotateZ: 45, overflow: "visible"}}
            transition={initialTransition ? {delay:0.5, duration: 1} : {delay:0, duration: 0}}
            style={{originX: 1, originY: 1}}
            dimensionOverride={true}
            onAnimationComplete={() => {
                setzInd(0)
                setInitialTransition(false)
            }}
            text="Experience" 
            orientation="bottom-right" 
            path="/experience"
            type="animator"/>

        </div>
    )

}

export default ExperiencePage;