
import { motion } from "framer-motion";
import styles from '../../Styles/Projects/ProjectCard.module.css';
import SocialLink from '../Misc/SocialLink';
import { PropTypes } from 'prop-types';

const ProjectCard = ({repo, text, play}) => {

    console.log(repo)
    return (

        <motion.div className={styles.card}
        initial={{scale:0.5, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{delay:0.6, duration:0.2}}>

            <div className={styles.textLink}>
                <div className={styles.projectImg}>
                    <img style={{height:"95%", translate:"1% 3%"}} src={"projectImages/" + repo + ".png"}/>
                </div>
                <div className={styles.linkDownload}>
                        <SocialLink iconPath="homePageImages/socialLinks/github.png" url={"https://github.com/ahmadbarzak/" + repo} />
                        { play && <SocialLink iconPath="projectImages/play.png" url={"https://ahmadbarzak.com/" + repo} /> }
                        { !play && <SocialLink iconPath="projectImages/download.png" url={"https://github.com/ahmadbarzak/" + repo + "/archive/refs/heads/main.zip"} isDownloadLink="true" /> }
                </div>
            </div>
            <div className={styles.projectText}>
                <p>{text}</p>
            </div>
            
        </motion.div>

        // <iframe style={{width: "75vw", height:"70vh", border:"5px solid white"}} src="https://ahmadbarzak.com/">
        // </iframe>


    )
}

ProjectCard.propTypes = {
    repo: PropTypes.string.isRequired,
    text: PropTypes.string,
    play: PropTypes.bool
}

export default ProjectCard;