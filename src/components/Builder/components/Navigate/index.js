import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import { connect } from 'react-redux';
import Form from './components/form';
import {
    updateElementAction,
    clearIdActiveElementAction,
} from '../../redux/actions';

import './style.scss';

function NavigateContainer({
    getElementById,
    idActiveElement,
    updateElement,
    clearIdActiveElement,
}) {
    const [classNav, setClassNav] = useState('navigate hide-nav');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        setTimeout(() => setClassNav('navigate show-nav'), 500);
    }, []);

    useEffect(() => {
        const el = getElementById[idActiveElement];
        setHeight(`${el.height}`); setWidth(`${el.width}`); setX(`${el.x}`); setY(`${el.y}`); setText(`${el.text}`);
    }, [getElementById, idActiveElement]);

    const close = () => {
        setClassNav('navigate hide-nav');
        setTimeout(() => clearIdActiveElement(), 1000);
    };

    const updateElementThrottle = throttle(updateElement, 2000);

    const update = (e) => {
        const name = e.target.name;
        const targetValue = e.target.value;
        switch (name) {
            case 'width': setWidth(targetValue); break;
            case 'height': setHeight(targetValue); break;
            case 'x': setX(targetValue); break;
            case 'y': setY(targetValue); break;
            default: setText(targetValue);
        }
        // eslint-disable-next-line radix
        const value = name !== 'text' ? parseInt(targetValue) : targetValue;
        const el = {};
        el[name] = value;
        updateElementThrottle(el);
    };

    return (
        <Form
            update={update}
            close={close}
            width={width}
            height={height}
            x={x}
            y={y}
            text={text}
            classNav={classNav}
        />
    );
}

NavigateContainer.propTypes = {
    getElementById: PropTypes.object.isRequired,
    idActiveElement: PropTypes.string.isRequired,
    clearIdActiveElement: PropTypes.func.isRequired,
    updateElement: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    getElementById: state.builder.getElementById,
    elementIds: state.builder.elementIds,
    idActiveElement: state.builder.idActiveElement,
});

const mapDispathToProps = {
    updateElement: updateElementAction,
    clearIdActiveElement: clearIdActiveElementAction,
};

export default connect(mapStateToProps, mapDispathToProps)(NavigateContainer);
