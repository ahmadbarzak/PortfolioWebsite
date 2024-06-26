
import { motion } from "framer-motion";
import styles from '../../Styles/Projects/ProjectCard.module.css';
import SocialLink from '../Misc/SocialLink';
import { PropTypes } from 'prop-types';

const ProjectCard = ({repo, text, play}) => {

    console.log(repo)
    return (

        <div style={{width: "100vw", display:"flex", justifyContent:"center", alignItems: "center"}}>
            <motion.div className={styles.card}
            initial={{scale:0.5, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{delay:0.6, duration:0.2}}>

                <div className={styles.contentWrapper}>
                    <div className={styles.projectImg}>
                        <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={"projectImages/" + repo + ".png"} />
                    </div>
                    <div className={styles.projectText}>
                        <p>{text}</p>
                    </div>
                </div>

                <div className={styles.linkDownload}>
                    <SocialLink iconPath="homePageImages/socialLinks/github.png" url={"https://github.com/ahmadbarzak/" + repo} />
                    <SocialLink iconPath="projectImages/download.png" url={"https://github.com/ahmadbarzak/" + repo + "/archive/refs/heads/main.zip"} isDownloadLink />
                    {play ? <SocialLink iconPath="projectImages/play.png" url={"https://ahmadbarzak.com/" + repo} /> : <SocialLink iconPath="projectImages/play.png" url="" playOff />}
                </div>

                
            </motion.div>
        </div>


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