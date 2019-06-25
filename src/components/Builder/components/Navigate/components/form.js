import React from 'react';
import PropTypes from 'prop-types';

function Form({ close, height, width, x, y, text, classNav, update }) {
    return (
        <div className={classNav}>
            <span onClick={close} className="close">x</span>
            <div className="nav-block">
                <label htmlFor="nav-width">
                    Width:
                </label>
                <input
                    onChange={update}
                    name="width"
                    id="nav-block"
                    type="number"
                    value={width}
                />
            </div>
            <div className="nav-block">
                <label htmlFor="nav-height">
                    Height
                </label>
                <input
                    onChange={update}
                    name="height"
                    id="nav-block"
                    type="number"
                    value={height}
                />
            </div>
            <div className="nav-block">

                <label htmlFor="nav-positiion-x">
                    Positiion x:
                </label>
                <input
                    onChange={update}
                    name="x"
                    id="nav-positiion-x"
                    type="number"
                    value={x}
                />
            </div>
            <div className="nav-block">

                <label htmlFor="nav-positiion-y">
                    Positiion y:
                </label>
                <input
                    onChange={update}
                    name="y"
                    id="nav-positiion-y"
                    type="number"
                    value={y}
                />
            </div>
            <div className="nav-block">
                <label htmlFor="nav-text">
                    Text:
                </label>
                <textarea
                    onChange={update}
                    name="text"
                    id="nav-text"
                    value={text}
                />
            </div>
        </div>
    );
}

Form.propTypes = {
    close: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    classNav: PropTypes.string.isRequired,
};

export default Form;
