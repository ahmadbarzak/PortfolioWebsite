import PropTypes from 'prop-types';

const TriangleButton = ({ text, orientation, onClick }) => {
  // Inline styles
  const containerStyle = {
    position: 'absolute',
    backgroundColor: "transparent", // Button color
    bottom: 0,
    right: 0,
    display: 'flex',
    width: '500px',
    height: '500px',
    overflow: 'hidden',
    pointerEvents: 'none', 
  };

  const diamondStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: '-50%',
    right: '-50%',
    "backgroundColor": 'blue', // Diamond color
    transform: 'rotate(-45deg)',
    display: 'flex',
    margin: 'auto',
    "placeContent": 'start center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    pointerEvents: 'auto',
  };

  const textStyle = {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: '10px', // Adjust based on diamond size to position the text within the visible triangle
  };

  if (orientation === "top-left") {
    delete containerStyle.bottom;
    delete containerStyle.right;
    containerStyle.top = 0;
    containerStyle.left = 0;
    delete diamondStyle.bottom;
    delete diamondStyle.right;
    diamondStyle.top = '-50%';
    diamondStyle.left = '-50%';
    diamondStyle.transform = 'rotate(135deg)';
    delete textStyle.paddingTop;
    textStyle.transform = 'rotate(180deg)';
    textStyle.paddingBottom = '10px';

  }

  return (
    <div style={containerStyle} onClick={onClick}>
      <div style={diamondStyle}>
        <span style={textStyle}>{text}</span>
      </div>
    </div>
  );
};

TriangleButton.propTypes = {
  text: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['top-left', 'bottom-right']),
  onClick: PropTypes.func,
};

export default TriangleButton;