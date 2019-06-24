import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../tags/Tag';

function Sidebar({ tags, mouseDragDown, mouseDragUp, active }) {
    return (
        <div id="sidebar">
            <div className="sidebar-wrap">
                {tags.map(tag => (
                    <Tag
                        mouseDragDown={mouseDragDown}
                        mouseDragUp={mouseDragUp}
                        key={tag.type} tag={tag}
                        active={active}
                    />
                ))}
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object),
    mouseDragDown: PropTypes.func.isRequired,
    mouseDragUp: PropTypes.func.isRequired,
    active: PropTypes.object,
};

export default Sidebar;
