import { PropTypes } from 'prop-types';

const SocialFact = ({styles, text, icon, orientation}) => {

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
        <div style={combinedStyles}>
            <p style={{margin:3, font:"roboto-serif" , fontSize: "16px"}}> {text}</p>
            <img style={{...imgStyles, ...{padding: "5px", margin: 0, left: 0}}} src={icon}/>
        </div>
    );
}

SocialFact.propTypes = {
        styles: PropTypes.object,
        text: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        orientation: PropTypes.oneOf(['left', 'right']),
}

export default SocialFact;