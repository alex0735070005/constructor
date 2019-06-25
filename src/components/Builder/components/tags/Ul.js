import React from 'react';
import PropTypes from 'prop-types';

function Ul({ tag, mouseUp, mouseDown, renderActive, style, showActive, name, className }) {
    return (
        <>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <ul
                onClick={showActive}
                onMouseUp={mouseUp}
                onMouseDown={mouseDown}
                style={style}
                className={className}
            >
                {tag.id ? tag.children.map(e => <li key={e.text}>{e.text}</li>) : name}
            </ul>
            {renderActive()}
        </>
    );
}

Ul.propTypes = {
    tag: PropTypes.object,
    mouseUp: PropTypes.func.isRequired,
    mouseDown: PropTypes.func.isRequired,
    renderActive: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
    showActive: PropTypes.func,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default Ul;
