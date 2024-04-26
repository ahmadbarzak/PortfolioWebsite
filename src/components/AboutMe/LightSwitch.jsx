import { PropTypes } from 'prop-types';
import styles from '../../Styles/AboutMe/LightSwitch.module.css';


const LightSwitch = ({mode, clicked}) => {

    // let lightImg = "aboutMeImages/lightSwitch/Work.png";

    let classMode = styles.work;
    if (mode === "social") {
        // lightImg = "aboutMeImages/lightSwitch/light2.svg";
        classMode = styles.social;
    }
    const lightImg = "aboutMeImages/lightSwitch/light2.svg";

    console.log(mode);


    return (
    <div style={{height:"30px", transform:mode==="social"?"scale(1, 1)":"scale(1, -1)"}} className={styles.light}>
        <img className={styles.img} src={lightImg} alt="LightSwitch" />
        <div onClick={clicked} className={`${styles.switch} ${classMode}`}></div>
    </div>
    )
}

LightSwitch.propTypes = {
    mode: PropTypes.oneOf(['work', 'social']),
    clicked: PropTypes.func,
    style: PropTypes.object
}

export default LightSwitch;