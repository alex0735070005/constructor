import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import H1 from './H1';
import Ul from './Ul';
import Div from './Div';

function Tag({ tag, mouseDragDown, mouseDragUp, active }) {
    const mouseUp = e => mouseDragUp(e, tag);
    const mouseDown = e => mouseDragDown(e, tag);
    const { width, height } = tag;
    const renderActive = () => (active && (active.type === tag.type) ? <div style={{ maxWidth: `${width}px`, width: '100%', height: `${height}px` }} className="el-wrap" /> : '');

    return (
        <>
            {tag.type === 'h1' && <H1
                mouseUp={mouseUp}
                mouseDown={mouseDown}
                tag={tag}
                renderActive={renderActive}
            />}
            {tag.type === 'ul' && <Ul
                mouseUp={mouseUp}
                mouseDown={mouseDown}
                tag={tag}
                renderActive={renderActive}
            />}
            {tag.type === 'div' && <Div
                mouseUp={mouseUp}
                mouseDown={mouseDown}
                tag={tag}
                renderActive={renderActive}
            />}
            {tag.type === 'button' && <Button
                mouseUp={mouseUp}
                mouseDown={mouseDown}
                tag={tag}
                renderActive={renderActive}
            />}
        </>
    );
}

Tag.propTypes = {
    tag: PropTypes.object.isRequired,
    mouseDragDown: PropTypes.func,
    mouseDragUp: PropTypes.func,
    active: PropTypes.object,
};

export default Tag;
