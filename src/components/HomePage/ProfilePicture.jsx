import {PropTypes} from 'prop-types';
import styles from './Styles/ProfilePicture.module.css';

const ProfilePicture = ({path}) => {

  ProfilePicture.propTypes = {
    path: PropTypes.string.isRequired,
  };

  return (
    <img src={path} alt="Profile Picture" className={styles.profile}/>
  );
};

export default ProfilePicture;