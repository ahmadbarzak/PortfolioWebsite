import { motion } from 'framer-motion';
import LightSwitch from './LightSwitch';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import styles from '../../Styles/AboutMe/AboutMeCard.module.css';

const AboutMeCardComponent = forwardRef(({onLightClicked}, ref) => {

  AboutMeCardComponent.displayName = 'AboutMeCard';

  const [mode, setMode] = useState('work');

  function lightClicked(){
    setMode(mode === 'work' ? 'social' : 'work');
    onLightClicked(mode);
  }

  return (
    <div ref={ref} className={styles.defaultStyle}>
        <LightSwitch mode={mode} clicked={() => lightClicked()} />
          <p className={styles.aboutMe}>About Me</p>
          <p className={styles.mode}>{mode ==='work'?'social' + " -":'work' + " - "}</p>
</div>

  );
});

AboutMeCardComponent.propTypes = {
    style: PropTypes.object,
    onLightClicked: PropTypes.func,
};


const AboutMeCard = motion(AboutMeCardComponent, { forwardMotionProps: true })

export default AboutMeCard;
