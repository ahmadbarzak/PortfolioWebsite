import { PropTypes } from 'prop-types';


const LightSwitch = ({mode, clicked, style}) => {

    // mode = "work"

    let lightImg = "Work.png";

    const lightStyles = {
        position: 'relative',
        height: '200px',
        width: '200px',
    }


    const switchStyles = {
        position: 'absolute',
        width: '29.6%',
        height: '22%',
        left: '37%',
        top: '28%',
    }

    if (mode === "social") {
        lightImg = "Social.png";
        switchStyles.top = '50%';
    }

    const combinedStyles = { ...lightStyles, ...style };

    return (
    <div style={combinedStyles}>
        <img style={{height:'100%', width:'100%'}} src={lightImg} alt="LightSwitch" />
        <div onClick={clicked} style={switchStyles}></div>
    </div>
    )
}

LightSwitch.propTypes = {
    mode: PropTypes.oneOf(['work', 'social']),
    clicked: PropTypes.func,
    style: PropTypes.object
}

export default LightSwitch;