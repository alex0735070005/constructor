import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from './components/List';
import {
    updateElementAction,
    clearIdActiveElementAction,
    setIdActiveElementAction,
} from '../../redux/actions';

import './style.scss';

function Loyout({
    elementIds,
    getElementById,
    setIdActiveElement,
    idActiveElement,
}) {
    const showNavActiveElement = (id) => {
        setIdActiveElement(id);
    };

    return (
        <List
            elementIds={elementIds}
            getElementById={getElementById}
            showNavActiveElement={showNavActiveElement}
            idActiveElement={idActiveElement}
        />
    );
}

Loyout.propTypes = {
    getElementById: PropTypes.object.isRequired,
    idActiveElement: PropTypes.string,
    setIdActiveElement: PropTypes.func.isRequired,
    elementIds: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = state => ({
    getElementById: state.builder.getElementById,
    elementIds: state.builder.elementIds,
    idActiveElement: state.builder.idActiveElement,
    builderAreaX: state.builder.builderAreaX,
    builderAreaY: state.builder.builderAreaY,
});

const mapDispathToProps = {
    updateElement: updateElementAction,
    clearIdActiveElement: clearIdActiveElementAction,
    setIdActiveElement: setIdActiveElementAction,
};

export default connect(mapStateToProps, mapDispathToProps)(Loyout);
