import styles from '../../Styles/Experience/CircleButtons.module.css';
import { motion } from 'framer-motion';
import { PropTypes } from 'prop-types';
import { forwardRef } from 'react';

const CircleButtonsComponent = forwardRef(({expIndex, handleClick, unclickable, divArray, propStyles}, ref) => {


return (
<motion.div ref={ref} style={propStyles} className={styles.circleContainer} >
    {
        divArray.map((divNum, index) => {
            return (
                <div key={index} className={`${styles.circle} ${unclickable?styles.duringclick : expIndex===index?styles.clicked : styles.notclicked}`}
                onClick={()=>handleClick(index)}></div>
            )
        })
    }

</motion.div>

)
})

CircleButtonsComponent.displayName = 'CircleButtons';

CircleButtonsComponent.propTypes = {
    expIndex: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    unclickable: PropTypes.bool.isRequired,
    divArray: PropTypes.array.isRequired,
    propStyles: PropTypes.object
}

const CircleButtons = motion(CircleButtonsComponent, { forwardMotionProps: true })

export default CircleButtons;
