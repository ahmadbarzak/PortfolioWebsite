import { PropTypes } from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../../Styles/AboutMe/Lamp.module.css';
import Light from './Light';

const Lamp = ({pathIndex, progress, paths, opacity}, ref) => {
    
    const variants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { duration: 2 },
        },
        work: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        social: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        style={{zIndex: 1}}
        ref={ref} className = { `${styles.divStyle}` }
        >
            <div className={ styles.ceilLamp }>
                <img src="aboutMeImages/lightSwitch/ceilLamp.png" style={{width:"60%"}}/>
            </div>

            <motion.div
            variants={variants}
            initial="social"
            animate="work"
            exit="social"
            className={ `light ${styles.lampLight}` }
            >
                <Light
                pathIndex={pathIndex}
                progress={progress}
                paths={paths}
                opacity={opacity} 
                />

            </motion.div>
        </motion.div>
    )
};

Lamp.propTypes = {
    mode: PropTypes.oneOf(['work', 'social']),
}

export default Lamp;