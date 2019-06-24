import React from 'react';
import PropTypes from 'prop-types';

function H1({ tag, mouseUp, mouseDown, renderActive }) {
    const { name, width, height, x, y } = tag;

    const style = { maxWidth: `${width}px`, width: '100%', height: `${height}px` };

    if (x && y) {
        style.top = `${y}px`;
        style.left = `${x}px`;
    }

    return (
        <>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <h1
                onMouseUp={mouseUp}
                onMouseDown={mouseDown}
                style={style}
            >
                {name}
            </h1>
            {renderActive()}
        </>
    );
}

H1.propTypes = {
    tag: PropTypes.object.isRequired,
    mouseUp: PropTypes.func.isRequired,
    mouseDown: PropTypes.func.isRequired,
    renderActive: PropTypes.func.isRequired,
};

export default H1;
