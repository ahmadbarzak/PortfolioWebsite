import SocialLink from '../Misc/SocialLink';
import ProfilePicture from './ProfilePicture';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from '../../Styles/HomePage/ProfileCard.module.css';

const ProfileCardComponent = forwardRef(({path, text}, ref) => {

  ProfileCardComponent.displayName = 'ProfileCard';

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
                <SocialLink iconPath="homePageImages/socialLinks/gmail.png" url="mailto:ahmadmbarzak@gmail.com" />
                <SocialLink iconPath="homePageImages/socialLinks/linkedin.png" url="https://www.linkedin.com/in/abarzak/"/>
                <SocialLink iconPath="homePageImages/socialLinks/github.png" url="https://github.com/abar494"/>
            </div>
        </div>
    </div>
  );
});

ProfileCardComponent.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


const ProfileCard = motion(ProfileCardComponent, { forwardMotionProps: true })

export default ProfileCard;