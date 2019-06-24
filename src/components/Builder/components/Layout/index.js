import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Tag from '../tags/Tag';
import './style.scss';

function Layout({
    elements,
    active,
    setActive,
    clearActive,
    builderAreaX,
    builderAreaY,
}) {
    const [activeNode, setActiveNode] = useState(null);

    const builderContainer = useRef(null);

    const mouseDragMove = (e) => {
        if (activeNode) {
            const x = e.pageX - activeNode.clientWidth / 2;
            const y = e.pageY - activeNode.clientHeight / 2;
            const isBuilderAreaX = x > builderAreaX;
            const isBuilderAreaY = y > builderAreaY;
            activeNode.style.top = `${y}px`;
            activeNode.style.left = `${x}px`;

            if (isBuilderAreaX && isBuilderAreaY) {
                activeNode.className = 'drag drooped';
            } else {
                activeNode.className = 'drag';
            }
        }
    };

    const mouseDragDown = (e, data) => {
        e.preventDefault();
        const target = e.target;
        const x = e.pageX - target.clientWidth / 2;
        const y = e.pageY - target.clientHeight / 2;
        e.target.className = 'drag';
        target.style.top = `${y}px`;
        target.style.left = `${x}px`;
        setActiveNode(target);
        setActive(data);
    };

    const mouseDragUp = (e, data) => {
        const x = e.pageX - activeNode.clientWidth / 2;
        const y = e.pageY - activeNode.clientHeight / 2;
        const isBuilderAreaX = x > builderAreaX;
        const isBuilderAreaY = y > builderAreaY;

        if (isBuilderAreaX && isBuilderAreaY) {
            console.log('hi');
        }

        activeNode.className = '';
        setActiveNode(null);
        clearActive();
    };

    return (
        <div ref={builderContainer} className="builder-container">
            {elements.map(e => (<Tag
                mouseDragUp={mouseDragUp}
                mouseDragMove={mouseDragMove}
                mouseDragDown={mouseDragDown}
                key={e.id} tag={e}
            />
            ))}
        </div>
    );
}

Layout.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object),
    active: PropTypes.object,
    setActive: PropTypes.func.isRequired,
    clearActive: PropTypes.func.isRequired,
    builderAreaX: PropTypes.number.isRequired,
    builderAreaY: PropTypes.number.isRequired,
};

export default Layout;
