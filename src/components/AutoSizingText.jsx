import { Textfit } from 'react-textfit';
import PropTypes from 'prop-types';


const AutoSizingText = ({ text }) => {
    return (
        <div style={{ width: '100%', height: '100%', border: '1px solid black' }}>
            <Textfit mode="single" max={72}>
                {text}
            </Textfit>
        </div>
    );
};

AutoSizingText.propTypes = {
    text: PropTypes.string.isRequired,
};

export default AutoSizingText;