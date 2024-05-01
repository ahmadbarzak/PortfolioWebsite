import { useEffect, useState } from 'react';
import { motion, useDragControls, useMotionValue, useMotionValueEvent } from 'framer-motion';


const DraggableLight = () => {

    const careerObjA = "I am a student who has recently graduated with a BE (Hons) in Software Engineering, " +
    "aspiring to be involved in the professional world of technology. Growing up, I was always " +
    "interested in mathematics and technology and excited by the various problems these fields have " +
    "bestowed upon us to solve.";

    const lightX = useMotionValue(0);

    // console.log(lightX.get())

    useMotionValueEvent(lightX, "change", () => {
        // console.log(latest)
        console.log(lightX)
        updateLight()

    })

    const controls = useDragControls();

    function startDrag(event) {
        controls.start(event, {
            // onDrag: (event, info) => {
            //     console.log("lightX val is " + lightX.get())
            //     console.log("info val is " + info.point.x)
            //     lightX.set(info.point.x);
            // }
        })
    }


    const [spanData, setSpanData] = useState({});
    const [lightPoints, setLightPoints] = useState({});


    const updateSpans = () => {
        const spans = document.querySelectorAll('.character-span');
        
        const spanInfo = Array.from(spans).map(span => {
          const rect = span.getBoundingClientRect();
          return {
            width: rect.width,
            height: rect.height,
            top: rect.top,
            left: rect.left,
          };
        });

        setSpanData(spanInfo);
    };



    const updateLight = () => {
        const lightInfo = document.querySelector('.light').getBoundingClientRect();
        const { l, t, w, h } = { l: lightInfo.left, t: lightInfo.top, w: lightInfo.width, h: lightInfo.height }
        
        const lightData = { 
            a: {x: l+19/45*w, y: t},
            b: {x: l+26/45*w, y: t},
            c: {x: l, y: t+h},
            d: {x: l+w, y: t+h}
        }
        
        const {a, b, c, d} = lightData;
        const {m1, m2} = {m1: (c.y - a.y)/(c.x - a.x), m2: (b.y - d.y)/(b.x - d.x)}
        const {c1, c2} = {c1: a.y - m1*a.x, c2: b.y - m2*b.x}
        setLightPoints({ m1: m1, c1: c1, m2: m2, c2: c2, ay: a.y, cy: c.y })
    };

    useEffect(() => {  
      // Measure the spans on the first render
      updateLight();
      updateSpans();
      // Optionally, you can re-measure when the window resizes
      window.addEventListener('resize', updateSpans);
  
      // Cleanup listener when the component unmounts
      return () => window.removeEventListener('resize', updateSpans);
    }, []);


    function getIsInLight(p, {m1, c1, m2, c2, ay, cy}) {
        return (p.y > m1*p.x + c1 &&
                p.y > m2*p.x + c2 &&
                p.y > ay &&
                p.y < cy);
    }

    console.log(lightX.get())

    let currentSpan = {};
    let style = false;
    let pi = {};
    let pf = {};
    let pmid = {};
    // let currentSpan = [];

    return (
    <div onPointerDown={startDrag} style={{zIndex:5}}>
        <motion.img onDrag={(_, info) => lightX.set(info.point.x)} drag={"x"} dragControls={controls} className="light" 
        style={{ 
        lightX,
        width:"300px",
        translate:"50% 40%" }}
        src="aboutMeImages/lightSwitch/lightCone.svg" />
        {careerObjA.split('').map((char, index) => {

            currentSpan = spanData[index];

            if (Object.keys(lightPoints).length && 
                Object.keys(currentSpan).length) {

                pi = {x: currentSpan.left, y: currentSpan.top};
                pmid = {x: currentSpan.left + currentSpan.width/2, y: currentSpan.top + currentSpan.height/2};
                pf = {x: currentSpan.left + currentSpan.width, y: currentSpan.top + currentSpan.height};
    
                if ((getIsInLight(pi, lightPoints) && getIsInLight(pmid, lightPoints)) || 
                    (getIsInLight(pmid, lightPoints) && getIsInLight(pf, lightPoints))){
                    style = true;
                }
                else {
                    style = false;
                }
            }
            return <span className="character-span" style={{color: style?"#000000":"#D1ACFF"}} key={index}>{char}</span>
        })}
    </div>
    )}

export default DraggableLight;
