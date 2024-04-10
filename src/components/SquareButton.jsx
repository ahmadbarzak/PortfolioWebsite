import PropTypes from 'prop-types';

const SquareButton = ({ text, onClick }) => {

    const styles = {
        backgroundColor: '#BB86FC', // Button background color
        color: '#F8F8FF', // Text color
          padding: '5px 20px', // Vertical and horizontal padding
          textAlign: 'center',
          height: '40px', // Button height
          width: '130px', // Button width
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '20px', // Text size
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: 0,
          border: '2px solid #ffffff', // White border
          fontFamily: 'Roboto-Serif',
    };

    return (
        <button onClick={onClick} style={styles}>
            {text}
        </button>
    );
}

SquareButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SquareButton;