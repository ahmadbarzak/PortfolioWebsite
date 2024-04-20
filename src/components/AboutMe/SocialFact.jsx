import { PropTypes } from 'prop-types';
import { forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Styles/SocialFact.module.css';


const SocialFact = forwardRef(({styleProps, text, icon, orientation, mode}, ref) => {

    styleProps.flexDirection = orientation === 'left' ? 'row' : 'row-reverse';

    return (
        <AnimatePresence>
        { mode === "social" && 
            <motion.div
                exit={{opacity: 0}}
                transition={{duration: 0.2}}
                ref={ref}
                className={styles.fact}
                style={styleProps}
            >
                <p>{text}</p>
                {icon!==undefined && <img className={styles.image} src={icon}/>}
            </motion.div>
        }
        </AnimatePresence>
    );
});

SocialFact.displayName = 'SocialFact';

SocialFact.propTypes = {
        styleProps: PropTypes.object,
        text: PropTypes.string.isRequired,
        icon: PropTypes.string,
        orientation: PropTypes.oneOf(['left', 'right']),
        mode: PropTypes.oneOf(['work', 'social'])
}

const MotionSocialFact = motion(SocialFact, {forwardMotionProps: true});

export default MotionSocialFact;