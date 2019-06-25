import React from 'react';
import PropTypes from 'prop-types';

function H1({ mouseUp, mouseDown, renderActive, style, showActive, name, className }) {
    return (
        <>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <h1
                onClick={showActive}
                onMouseUp={mouseUp}
                onMouseDown={mouseDown}
                style={style}
                className={className}
            >
                {name}
            </h1>
            {renderActive()}
        </>
    );
}

H1.propTypes = {
    mouseUp: PropTypes.func.isRequired,
    mouseDown: PropTypes.func.isRequired,
    renderActive: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
    showActive: PropTypes.func,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default H1;
