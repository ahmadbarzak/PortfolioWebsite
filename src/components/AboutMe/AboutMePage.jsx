import AboutMeCard from './AboutMeCard';
import SocialFact from './SocialFact';
import { socialFacts } from './socialFacts.json';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BackButton from '../Misc/BackButton';
import TriangleButton from '../Misc/TriangleButton';
import { motion, useMotionValue, animate } from 'framer-motion';
import Lamp from './Lamp';
import styles from '../../Styles/AboutMe/AboutMePage.module.css';
import "../../App.css";
import {shape, shape_morphed} from './lightPath';
import useScreenSize from '../../hooks/useScreenSize';
import getScale from './scaleCalculator';
import { updateSpans, updateLight, isInLight } from './lightFunctions';

const AboutMePage = () => {
  
  const screenSize = useScreenSize();
  const [scalarType, setScalarType] = useState("desktop");
  const [initialScreenSize, setInitialScreenSize] = useState(0);
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(0);
  const paths = [shape, shape_morphed]
  const opacity = useMotionValue(0);

  const [type, setType] = useState('social');
  const [initialTransition, setInitialTransition] = useState(true);
  const [spanDataA, setSpanDataA] = useState({});
  const [spanDataB, setSpanDataB] = useState({});
  const [lightPoints, setLightPoints] = useState({});

  let style = false;
  let pi = {};
  let pf = {};
  let pmid = {};

  const scaleParams = {
    shrinkValue: 40,
    mobileExpandValue: 70,
    desktopExpandValue: 60,
    maxScreenWidth: 1176,
    noShrinkLenience: 200,
    initialScreenSize: initialScreenSize,
    mobileWidth: 400,
    vw: screenSize.width / 100,
    scalarType: scalarType
  };

  useEffect(() => {
    setScalarType(screenSize.width <= scaleParams.mobileWidth? "mobile" : "desktop");
    setInitialScreenSize(screenSize.width)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scale = getScale(scaleParams);

  const careerObjA = "I am a student who has recently graduated with a BE (Hons) in Software Engineering, " +
  "aspiring to be involved in the professional world of technology. Growing up, I was always " +
  "interested in mathematics and technology and excited by the various problems these fields have " +
  "bestowed upon us to solve.";

  const careerObjB = "These interests have ranged from machine learning and market-making " +
  "algorithms, to growing interests in web development. I actively enjoy critical thinking, sharing" +
  " ideas, and working as a team to contribute to projects that translate to real-world impacts"

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    }
  }

  useEffect(() => {  
    const update = () => {
      if (type === "work") {
        updateLight(setLightPoints);
        updateSpans(setSpanDataA, setSpanDataB);
      }
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [type]);


  const handleClick = (type) => {
    setType(type);
    const nextIndex = (pathIndex + 1) % paths.length;
    animate(progress, 1, {
        duration: 0.5,
        ease: "easeInOut",
        onComplete: () => {
            setTimeout(() => {
                progress.set(0);
                setPathIndex(nextIndex);
            }, 200);
        }
    });
    animate(opacity, nextIndex===1?1:0, {duration: 0.5});
  };

  function getSpanStyle(index, isTop) {
    
    const currentSpan = isTop?spanDataA[index]:spanDataB[index];

    if (Object.keys(isTop?spanDataA:spanDataB).length &&
        Object.keys(currentSpan).length &&
        Object.keys(lightPoints).length) {

        pi = {x: currentSpan.left, y: currentSpan.top};
        pmid = {x: currentSpan.left + currentSpan.width/2, y: currentSpan.top + currentSpan.height/2};
        pf = {x: currentSpan.left + currentSpan.width, y: currentSpan.top + currentSpan.height};

        if ((isInLight(pi, lightPoints) && isInLight(pmid, lightPoints)) || 
            (isInLight(pmid, lightPoints) && isInLight(pf, lightPoints))){
            return true;
        }
        else {
            return false;
        }
    }

  }

  return (
    <div className="background">
      <AboutMeCard
      onLightClicked = {(mode) => handleClick(mode)}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      />

      <TriangleButton 
      animate={{ translateX:scalarType==="mobile"?scale:-scale,
      rotateZ: -45, overflow: "visible" }}
      transition={initialTransition?{ delay: 0.4, duration: 0.45}: { delay: 0, duration: 0 }}
      onAnimationComplete={() => {
        setInitialTransition(false)
      }}
      style={{ originX: 0.14, originY: 0.545, zIndex: 2 }}
      text="Achievements" 
      orientation="top-left" 
      path="/achievements"
      type="animator"
      dimensionOverride={false}/>

      <TriangleButton 
      animate={{ translateX:scalarType==="mobile"?-scale:scale, rotateZ: -45, overflow: "visible"}}
      transition={initialTransition?{ delay: 0.4, duration: 0.45}: { delay: 0, duration: 0 }}
      onAnimationComplete={() => {
        setInitialTransition(false)
      }}
      style={{ originX: 1, originY: 0.55, zIndex: 2 }}
      text="Experience" 
      orientation="bottom-right" 
      path="/experience"
      type="animator"
      dimensionOverride={false}/>

      <Lamp 
      pathIndex={pathIndex}
      progress={progress}
      paths={paths}
      opacity={opacity}
      exit={{y: '100vh'}}/>

      
      <BackButton clicked={() => null} color="purple"/>

      <div className={styles.background}>
            <div className={styles.formatter}>
              {socialFacts.map((fact, index) => {
                let direction = index % 2 === 0 ? "-100vw" : '100vw'
                let rotate = fact.rotate ? fact.rotate : 0;
                const factStyles = screenSize.width >= 850 ? fact.style :
                screenSize.width >= 525 ? {left:fact.tabletLeft, top:fact.style.top} :
                {left:fact.mobileLeft, top:fact.style.top};
                
                return (
                  <AnimatePresence key={index}>
                  {type === "social" && <SocialFact 
                  initial={{opacity: 0, x: direction, rotateZ: 0 }}
                  animate={{opacity: 1, x: 0, rotateZ: rotate}}
                  exit={{opacity: 0, x: direction, rotateZ: 0}}
                  transition={{duration: 0.4 }}
                  styleProps={factStyles}
                  text={fact.text}
                  icon={fact.icon}
                  orientation={fact.orientation}
                  mode={type}/>
                  }
                </AnimatePresence>
                );
              })}

              <AnimatePresence>
                {type === "work" && (
                  <motion.div
                    style={{position:"absolute", top:"35%"}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`${styles.defaultStyle}  ${styles.worktext}`}
                    mode={type}
                  >
                    <p>
                      {careerObjA.split('').map((char, index) => {
                        style = getSpanStyle(index, true)
                        return <span className="character-spanA"
                        style={{color: style?"#FFFFFF":"#11415B"}}
                        key={index}>{char}</span>
                      })}
                    </p>
                    <p>
                      {careerObjB.split('').map((char, index) => {                      
                        style = getSpanStyle(index, false)
                        return <span className="character-spanB"
                        style={{color: style?"#000000":"#D1ACFF"}}
                        key={index}>{char}</span>
                      })}
                    </p>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
      </div>
    </div>

  );
};

export default AboutMePage;