
import { motion } from "framer-motion";


const ProjectCard = () => {

    return (

        <motion.div style={{width: "400px", height:"330px", backgroundColor:"#344070", border: "5px solid white", display:"flex", justifyContent:"center", alignItems:"center"}}
        initial={{scale:0.5, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{delay:0.6, duration:0.2}}>
        <span style={{color:"white", fontSize:"36px", fontFamily:"roboto-serif"}}>Insert Project Here!</span>
        </motion.div>


    )
}

export default ProjectCard;