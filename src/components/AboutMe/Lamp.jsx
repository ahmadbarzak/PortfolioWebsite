import { PropTypes } from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

const Lamp = ({mode}, ref) => {

    const divStyle = {
        left:"50%",
        maxHeight: "100vh",
        transform:"translate(-50%, 0%)",
        top:0,
        bottom:0,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"100%",
        position:"absolute",
        margin:0,
        overflow: "hidden",
    }

    const ceilLampStyle = {
        transform:"translate(80%, 0%)",
        height:"230px",
        width:"150px"
    }

    const lampLightStyle = {
        transform:"translate(35%, 0%)",
        height:"500px",
        width:"330px"
    }

    const cardVariants = {
        hidden: {
          opacity: 0,
        //   y: '-100vh',
        },
        visible: {
          opacity: 1,
        //   y: 0,
          transition: { duration: 2 },
        },
        enter: {
          y: '10vh',
          transition: { duration: 0.2 },
        }
      }

    const lampVariants = {
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
        variants={cardVariants}
        initial="hidden"
        animate="visible"
         ref={ref} style={ divStyle }>
            <div style={ ceilLampStyle }>
                <img src="/lightSwitch/ceilLamp.png" style={{width:"60%"}}/>
            </div>
            <AnimatePresence>
                {mode==='work' && <motion.div
                variants={lampVariants}
                initial="social"
                animate="work"
                exit="social"
                style={ lampLightStyle }>
                    <img src="/lightSwitch/lampLight.png" style={{width:"95%"}}/>
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
};

Lamp.propTypes = {
    mode: PropTypes.oneOf(['work', 'social']),
}

export default Lamp;