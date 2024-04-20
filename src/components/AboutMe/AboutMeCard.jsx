import { motion } from 'framer-motion';
import LightSwitch from './LightSwitch';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import styles from './Styles/AboutMeCard.module.css';

const AboutMeCard = forwardRef(({onLightClicked}, ref) => {

  AboutMeCard.displayName = 'AboutMeCard';

  const [mode, setMode] = useState('work');

  function lightClicked(){
    setMode(mode === 'work' ? 'social' : 'work');
    onLightClicked(mode);
  }

  return (
    <div ref={ref} className={styles.defaultStyle}>
        <LightSwitch mode={mode} clicked={() => lightClicked()} />
        <p>
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
