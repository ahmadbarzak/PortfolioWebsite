import { PropTypes } from 'prop-types';
import { forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SocialFact = forwardRef(({styles, text, icon, orientation, mode}, ref) => {

    const imgStyles = {
        width: '36px',
        height: '36px',
        margin: '0 auto',
        display: 'block',
    }

    const style = {
        width: '300px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const combinedStyles = {...style, ...styles};

    if (orientation === 'right') {
        combinedStyles.flexDirection = 'row-reverse';
    }

    return (
        <AnimatePresence>
        { mode === "social" && <motion.div
        exit={{opacity: 0}} transition={{duration: 0.2}} ref={ref} style={combinedStyles}>
            <p style={{font:"roboto-serif" , fontSize: "20px"}}> {text}</p>
            {icon!==undefined && <img style={{...imgStyles, ...{padding: "0px", margin: 0, left: 0}}} src={icon}/>}
        </motion.div>
        }
        </AnimatePresence>
    );
});

SocialFact.displayName = 'SocialFact';

SocialFact.propTypes = {
        styles: PropTypes.object,
        text: PropTypes.string.isRequired,
        icon: PropTypes.string,
        orientation: PropTypes.oneOf(['left', 'right']),
        mode: PropTypes.oneOf(['work', 'social'])
}

const MotionSocialFact = motion(SocialFact, {forwardMotionProps: true});

export default MotionSocialFact;