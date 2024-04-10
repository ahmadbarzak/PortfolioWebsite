import PropTypes from 'prop-types';

const SocialLink = ({ iconPath, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={iconPath} alt="Social Icon" style={{ width: '50px', height: '50px' }} />
    </a>
  );
};

SocialLink.propTypes = {
    iconPath: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default SocialLink;