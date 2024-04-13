import {PropTypes} from 'prop-types';

const ProfilePicture = ({path}) => {
  const style = {
    width: 280,
    height: 280,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  ProfilePicture.propTypes = {
    path: PropTypes.string.isRequired,
  };

  return (
    <img src={path} alt="Profile Picture" style={style}/>
  );
};

export default ProfilePicture;