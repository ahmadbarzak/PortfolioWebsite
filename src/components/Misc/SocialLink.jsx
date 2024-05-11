import PropTypes from 'prop-types';
import styles from "../../Styles/Misc/SocialLink.module.css";

const SocialLink = ({ iconPath, url, onClick, isDownloadLink }) => {

  const redirectAttribute = isDownloadLink==="true" ? { download: '' } : { target: "_blank"};

  return (
    <a href={url} rel="noopener noreferrer" onClick={onClick} {...redirectAttribute}>
      <img src={iconPath} alt="Social Icon" className={styles.link} />
    </a>
  );
};

SocialLink.propTypes = {
    iconPath: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isDownloadLink: PropTypes.string
};

export default SocialLink;