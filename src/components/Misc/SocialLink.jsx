import PropTypes from 'prop-types';
import styles from "../../Styles/Misc/SocialLink.module.css";

const SocialLink = ({ iconPath, url, onClick, isDownloadLink, playOff }) => {

  const redirectAttribute = isDownloadLink ? { download: '' } : { target: "_blank"};
  const style = playOff ? {opacity: 0.4, filter: "alpha(opacity=40)"} : {};


  return (
    <a href={url} rel="noopener noreferrer" onClick={onClick} {...redirectAttribute}>
      <img src={iconPath} style={style} alt="Social Icon" className={styles.link} />
    </a>
  );
};

SocialLink.propTypes = {
    iconPath: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isDownloadLink: PropTypes.bool,
    playOff: PropTypes.bool
};

export default SocialLink;