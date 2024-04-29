
import { motion } from "framer-motion";
import styles from '../../Styles/Projects/ProjectCard.module.css';

const ProjectCard = () => {

    return (

        <motion.div className={styles.card}
        initial={{scale:0.5, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{delay:0.6, duration:0.2}}>
            <span>Insert Project Here!</span>
        </motion.div>


    )
}

export default ProjectCard;