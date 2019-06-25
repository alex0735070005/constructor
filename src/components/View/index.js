import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortElementsAction } from '../Builder/redux/actions';
import Tag from '../Builder/components/tags/Tag';
import './style.scss';

function View({ elementIds, getElementById, sortElements }) {
    useEffect(() => {
        sortElements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="view-container">
            {elementIds.map(id => (<Tag
                key={id} tag={getElementById[id]}
            />
            ))}
        </div>
    );
}

View.propTypes = {
    getElementById: PropTypes.object.isRequired,
    elementIds: PropTypes.arrayOf(PropTypes.string),
    sortElements: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    getElementById: state.builder.getElementById,
    elementIds: state.builder.elementIds,
});

const mapDispatchToProps = {
    sortElements: sortElementsAction,
};


export default connect(mapStateToProps, mapDispatchToProps)(View);
