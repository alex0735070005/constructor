import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../../tags/Tag';

function List({
    elementIds,
    getElementById,
    showNavActiveElement,
    idActiveElement,
}) {
    return (
        <div className="builder-container">
            {elementIds.map(id => (<Tag
                mouseDragUp={() => null}
                mouseDragMove={() => null}
                mouseDragDown={() => null}
                key={id} tag={getElementById[id]}
                showNavActiveElement={showNavActiveElement}
                idActiveElement={idActiveElement}
            />
            ))}
        </div>
    );
}

List.propTypes = {
    getElementById: PropTypes.object.isRequired,
    showNavActiveElement: PropTypes.func.isRequired,
    elementIds: PropTypes.arrayOf(PropTypes.string),
    idActiveElement: PropTypes.string,
};

export default List;
