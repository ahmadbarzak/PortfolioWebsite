import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SquareButton = ({ text, path }) => {

    const styles = {
        backgroundColor: '#BB86FC', // Lighter pinkish purple
        color: '#F8F8FF', // Slightly darker white
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
          border: '2px solid #ffffff', // White border
          fontFamily: 'Roboto-Serif',
          justifyContent: 'center',
          alignItems: 'center',
    };

    return (
        <Link to={path}>
            <div style={styles}>
                {text}
            </div>
        </Link>
    );
}

SquareButton.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default SquareButton;