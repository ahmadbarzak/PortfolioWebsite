import PropTypes from 'prop-types';

const SocialLink = ({ iconPath, url, onClick }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      <img src={iconPath} alt="Social Icon" style={{ width: '50px', height: '50px' }} />
    </a>
  );
};

SocialLink.propTypes = {
    iconPath: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default SocialLink;