import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const SquareButton = forwardRef(({ text, path, clicked }, ref) => {

    const styles = {
        backgroundColor: '#BB86FC',
        color: '#F8F8FF',
          padding: '5px 5px',
          textAlign: 'center',
          height: '40px',
          width: '130px',
          textDecoration: 'none',
          display: 'flex',
          fontSize: '24px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: 0,
          border: '2px solid #FFFFFF',
          fontFamily: 'Roboto-Serif',
          justifyContent: 'center',
          alignItems: 'center',
    };

    function clickHandler() {
        clicked(text);
    }

    return (
        <div ref={ref}><Link to={path} onClick={() => clickHandler()}>
            <div style={styles}>
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