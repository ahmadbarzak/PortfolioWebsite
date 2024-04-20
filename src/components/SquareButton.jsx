import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Misc/SquareButton.module.css';

const SquareButton = forwardRef(({ text, path, clicked }, ref) => {

    function clickHandler() {
        clicked(text);
    }

    return (
        <div ref={ref}><Link to={path} onClick={() => clickHandler()}>
            <div className={styles.square}>
                {text}
            </div>
        </Link>
        </div>
    );
})

SquareButton.displayName = 'SquareButton';

SquareButton.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    clicked: PropTypes.func
};

const MotionSquareButton = motion(SquareButton, { forwardMotionProps: true })

export default MotionSquareButton;