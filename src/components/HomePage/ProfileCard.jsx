import SocialLink from '../SocialLink';
import ProfilePicture from './ProfilePicture';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './Styles/ProfileCard.module.css';

const ProfileCard = forwardRef(({path, text}, ref) => {

  ProfileCard.displayName = 'ProfileCard';

  return (
    <div ref={ref} className={styles.profileCard}>
        <div className = {styles.formatter}>
            <ProfilePicture path={path}/>
            <div className={styles.aboutme}>
              <p>
                {text}
              </p>
            </div>
            <div className={styles.links}>
                <SocialLink iconPath="/socialLinks/gmail.png" url="mailto:ahmadmbarzak@gmail.com" />
                <SocialLink iconPath="/socialLinks/linkedin.png" url="https://www.linkedin.com/in/abarzak/"/>
                <SocialLink iconPath="/socialLinks/github.png" url="https://github.com/abar494"/>
            </div>
        </div>
    </div>
  );
});

ProfileCard.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


const MotionProfileCard = motion(ProfileCard, { forwardMotionProps: true })

export default MotionProfileCard;