import { PropTypes } from 'prop-types'

const Lamp = ({mode}) => {

    const divStyle = {
        left:"50%",
        maxHeight: "100vh",
        transform:"translate(-50%, 0%)",
        top:0,
        bottom:0,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"100%",
        position:"absolute",
        margin:0,
        overflow: "hidden",
    }

    const ceilLampStyle = {
        transform:"translate(80%, 0%)",
        height:"230px",
        width:"150px"
    }

    const lampLightStyle = {
        transform:"translate(35%, 0%)",
        height:"500px",
        width:"330px"
    }

    return (
        <div style={ divStyle }>
            <div style={ ceilLampStyle }>
                <img src="/lightSwitch/ceilLamp.png" style={{width:"60%"}}/>
            </div>
            {mode==='work' && <div style={ lampLightStyle }>
                <img src="/lightSwitch/lampLight.png" style={{width:"95%"}}/>
            </div>}
        </div>
    )
}

Lamp.propTypes = {
    mode: PropTypes.oneOf(['work', 'social']),
}

export default Lamp