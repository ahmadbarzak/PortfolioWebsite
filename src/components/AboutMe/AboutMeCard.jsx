// import SocialLink from '../SocialLink';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import LightSwitch from './LightSwitch';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AboutMeCard = forwardRef(({style}, ref) => {

  AboutMeCard.displayName = 'AboutMeCard';

  const [mode, setMode] = useState('work');

  function functioncall(){
    console.log("light clicked!");
    setMode(mode === 'work' ? 'social' : 'work');
  }

  const defaultStyle = {position: 'relative', width: '300px', top:0, bottom:0, display: "flex", justifyContent: "center", alignItems:"center" }
  const combinedStyles = { ...defaultStyle, ...style };

  return (
    <div ref={ref} style={ combinedStyles }>
        <LightSwitch mode={mode} style={{position:"absolute", top:"30%"}} clicked={() => functioncall()} />
        <p style={{position: "absolute", color:'white', top:"0%", center:'0%', fontSize:'65px', margin:'10px 0', fontFamily:'Roboto-Serif'}}>
            About Me
        </p>
    </div>

    // <div ref={ref} style={{ position: 'relative', width: '600px', height: '600px', backgroundColor: 'red' }}>
    // {/* Since this div is using transform to center itself, it should also have position absolute */}
        // <LightSwitch mode={mode} style={{position:"absolute", top:"20%", left: "30%"}} clicked={() => functioncall()} />
  );
});

AboutMeCard.propTypes = {
    style: PropTypes.object,
};


const MotionAboutMeCard = motion(AboutMeCard, { forwardMotionProps: true })

export default MotionAboutMeCard;


{/* <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'blue', textAlign: 'center', width: '100%' }}> 
        <LightSwitch mode={mode} style={{left: "20%"}} clicked={() => functioncall()} />
        {/* Removed width 500, added units to lineHeight */}
    //     <div style={{ position: 'relative', lineHeight: '0.9em', height: "10%" }}> 
    //         {/* Added 'relative' positioning to parent div for correct absolute positioning of this p tag */}
    //         <p style={{
    //             backgroundColor: 'yellow',
    //             position: 'absolute',
    //             color: 'white',
    //             overflow: 'visible',
    //             top: '50%',
    //             right: '0%',
    //             fontSize: '65px',
    //             margin: '10px 0',
    //             fontFamily: 'Roboto-Serif',
    //         }}>
    //             {text}
    //         </p>
    //     </div>
    // </div> */}