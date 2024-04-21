import PropTypes from 'prop-types';
import styles from "../../Styles/Misc/SocialLink.module.css";

const SocialLink = ({ iconPath, url, onClick }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      <img src={iconPath} alt="Social Icon" className={styles.link} />
    </a>
  );
};

SocialLink.propTypes = {
    iconPath: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default SocialLink;