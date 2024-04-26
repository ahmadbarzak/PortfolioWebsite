import { forwardRef } from 'react';
import styles from '../../Styles/Projects/ProjectButton.module.css';
import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';

const ProjectButtonComponent = forwardRef(({ size, direction }, ref) => {

    const left = direction === "left";
    const small = size === "small";

    return (

        <div ref={ref} style={(small&&left)?{left:"2%"}:
        (small&&!left)?{right:"2%"}:(!small&&!left)?{transformOrigin:"50% 48%"}:{}} 
        className={`${small?styles.small:styles.large} ${left?styles.left:styles.right}`}>
            <img 
            style={small?{height:"40px"}:{}}
            src={size==="large"?"projectImages/projectButtonLarge.svg":
            "projectImages/projectButtonSmall.svg"} alt="arrow"/>
        </div>
    )

});

ProjectButtonComponent.displayName = 'ProjectButton';

ProjectButtonComponent.propTypes = {
    direction: PropTypes.oneOf(["left", "right"]).isRequired,
    size: PropTypes.oneOf(["large", "small"]).isRequired
}

const ProjectButton = motion(ProjectButtonComponent, { forwardMotionProps: true })

export default ProjectButton;