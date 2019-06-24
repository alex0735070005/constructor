import React from 'react';
import PropTypes from 'prop-types';

function Div({ tag, mouseUp, mouseDown, renderActive }) {
    const { width, height, x, y } = tag;

    const style = { maxWidth: `${width}px`, width: '100%', height: `${height}px` };

    if (x && y) {
        style.top = `${y}px`;
        style.left = `${x}px`;
    }

    return (
        <>
            <div
                onMouseUp={mouseUp}
                onMouseDown={mouseDown}
                style={style}
            >
                {tag.name}
            </div>
            {renderActive()}
        </>
    );
}

Div.propTypes = {
    tag: PropTypes.object.isRequired,
    mouseUp: PropTypes.func.isRequired,
    mouseDown: PropTypes.func.isRequired,
    renderActive: PropTypes.func.isRequired,
};

export default Div;
