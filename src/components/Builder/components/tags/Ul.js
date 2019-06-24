import React from 'react';
import PropTypes from 'prop-types';

function Ul({ tag, mouseUp, mouseDown, renderActive }) {
    const { width, height, x, y } = tag;

    const style = { maxWidth: `${width}px`, width: '100%', height: `${height}px` };

    if (x && y) {
        style.top = `${y}px`;
        style.left = `${x}px`;
    }

    return (
        <>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <ul
                onMouseUp={mouseUp}
                onMouseDown={mouseDown}
                style={style}
            >
                {tag.name}
            </ul>
            {renderActive()}
        </>
    );
}

Ul.propTypes = {
    tag: PropTypes.object.isRequired,
    mouseUp: PropTypes.func.isRequired,
    mouseDown: PropTypes.func.isRequired,
    renderActive: PropTypes.func.isRequired,
};

export default Ul;
