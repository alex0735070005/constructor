import React from 'react';
import PropTypes from 'prop-types';

function Div({ mouseUp, mouseDown, renderActive, style, showActive, name, className }) {
    return (
        <>
            <div
                onClick={showActive}
                onMouseUp={mouseUp}
                onMouseDown={mouseDown}
                style={style}
                className={className}
            >
                {name}
            </div>
            {renderActive()}
        </>
    );
}

Div.propTypes = {
    mouseUp: PropTypes.func.isRequired,
    mouseDown: PropTypes.func.isRequired,
    renderActive: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
    showActive: PropTypes.func,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default Div;
