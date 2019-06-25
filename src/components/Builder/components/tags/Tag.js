import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import H1 from './H1';
import Ul from './Ul';
import Div from './Div';

function Tag({ tag, mouseDragDown, mouseDragUp, active, showNavActiveElement, idActiveElement }) {
    const mouseUp = e => mouseDragUp(e, tag);
    const mouseDown = e => mouseDragDown(e, tag);
    const { width, height, x, y, id, name, text } = tag;
    const renderActive = () => (active && (active.type === tag.type) ? <div style={{ maxWidth: `${width}px`, width: '100%', height: `${height}px` }} className="el-wrap" /> : '');
     
    const renderTag = (WrappedComponent) => {
        const style = { maxWidth: `${width}px`, width: '100%', height: `${height}px` };

        const tagName = id ? text : name;
        const isLoyoutActive = id && (id === idActiveElement);

        const className = isLoyoutActive ? 'loyout-active' : '';

        if (x && y) {
            style.top = `${y}px`;
            style.left = `${x}px`;
        }

        const showActive = () => {
            showNavActiveElement(tag.id);
        };

        return (
            <WrappedComponent
                mouseUp={mouseUp}
                mouseDown={mouseDown}
                tag={tag}
                renderActive={renderActive}
                showActive={showActive}
                style={style}
                name={tagName}
                className={className}
            />
        );
    };

    return (
        <>
            {tag.type === 'h1' && renderTag(H1)}
            {tag.type === 'ul' && renderTag(Ul)}
            {tag.type === 'div' && renderTag(Div)}
            {tag.type === 'button' && renderTag(Button)}
        </>
    );
}

Tag.propTypes = {
    tag: PropTypes.object.isRequired,
    mouseDragDown: PropTypes.func,
    mouseDragUp: PropTypes.func,
    active: PropTypes.object,
    showNavActiveElement: PropTypes.func,
    idActiveElement: PropTypes.string,
};

Tag.defaultProps = {
    showNavActiveElement: () => null,
};

export default Tag;
