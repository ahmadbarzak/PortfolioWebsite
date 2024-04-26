import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Styles/Misc/SquareButton.module.css';

const SquareButtonComponent = forwardRef(({ text, path }, ref) => {


    return (
        <div ref={ref}><Link to={path}>
            <div className={styles.square}>
                {text}
            </div>
        </Link>
        </div>
    );
})

SquareButtonComponent.displayName = 'SquareButton';

SquareButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

const SquareButton = motion(SquareButtonComponent, { forwardMotionProps: true })

export default SquareButton;