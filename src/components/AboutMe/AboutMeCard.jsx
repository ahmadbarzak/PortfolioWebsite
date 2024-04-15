// import SocialLink from '../SocialLink';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import LightSwitch from './LightSwitch';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AboutMeCard = forwardRef(({style, onLightClicked}, ref) => {

  AboutMeCard.displayName = 'AboutMeCard';

  const [mode, setMode] = useState('work');

  function lightClicked(){
    setMode(mode === 'work' ? 'social' : 'work');
    onLightClicked(mode);
  }

  const defaultStyle = {position: 'relative', width: '300px', top:0, bottom:0, display: "flex", justifyContent: "center", alignItems:"center", overflow:"visible" }
  const combinedStyles = { ...defaultStyle, ...style };

  return (
    <div ref={ref} style={ combinedStyles }>
        <LightSwitch mode={mode} style={{position:"absolute", top:"30%"}} clicked={() => lightClicked()} />
        <p style={{position: "absolute", color:'white', top:"0%", center:'0%', transform:"translate(-10%, 0%)", fontSize:'65px', margin:'10px 0', fontFamily:'Roboto-Serif'}}>
            About Me
        </p>
</div>

  );
});

AboutMeCard.propTypes = {
    style: PropTypes.object,
    onLightClicked: PropTypes.func,
};


const MotionAboutMeCard = motion(AboutMeCard, { forwardMotionProps: true })

export default MotionAboutMeCard;
