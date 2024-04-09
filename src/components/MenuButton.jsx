import PropTypes from 'prop-types';

function MenuButton({ label, orientation, onClick }){
    let polygonString = "";
    if (orientation === "top-left") {
        polygonString = 'polygon(0 0, 100% 0%, 0 100%)';
    }
    if (orientation === "bottom-right") {
        polygonString = 'polygon(100% 0, 100% 100%, 0 100%)';
    }
    return (
      <button onClick={onClick} style={{
        border: 'none',
        background: 'purple',
        clipPath: polygonString,
        color: 'white',
        padding: '20px',
        cursor: 'pointer',
      }}>
        {label}
      </button>
    );
}

MenuButton.propTypes = {
    label: PropTypes.string.isRequired,
    orientation: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default MenuButton;