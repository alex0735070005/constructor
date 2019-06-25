import React from 'react';
import PropTypes from 'prop-types';

function Button({ mouseUp, mouseDown, renderActive, style, showNavActiveElement, name, className }) {
    return (
        <>
            <button
                onClick={showNavActiveElement}
                type="button"
                onMouseUp={mouseUp}
                onMouseDown={mouseDown}
                style={style}
                className={className}
            >
                {name}
            </button>
            {renderActive()}
        </>
    );
}

Button.propTypes = {
    mouseUp: PropTypes.func.isRequired,
    mouseDown: PropTypes.func.isRequired,
    renderActive: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
    showNavActiveElement: PropTypes.func,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default Button;
