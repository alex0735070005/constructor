import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    setActiveAction,
    addElementAction,
    clearActiveAction,
    setColumnsAction,
    setRowsAction,
    setBuilderAreaCordsAction,
    setIdActiveElementAction,
    clearIdActiveElementAction,
    updateElementAction,
} from './redux/actions';
import Sidebar from './components/Sidebar';
import Grid from './components/Grid';
import Layout from './components/Layout';
import Navigate from './components/Navigate';

import './style.scss';

function Builder({
    cellWidth,
    cellHeight,
    rows,
    columns,
    setColumns,
    setRows,
    active,
    clearActive,
    addElement,
    setBuilderAreaCords,
    setActive,
    tags,
    builderAreaX,
    builderAreaY,
    idActiveElement,
}) {
    const [activeNode, setActiveNode] = useState(null);

    const builderArea = useRef(null);

    useEffect(() => {
        const target = builderArea.current;
        const x = target.offsetLeft;
        const y = target.offsetTop;
        setBuilderAreaCords(x, y);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

        const blockX = e.pageX - builderAreaX - activeNode.clientWidth / 2;
        const blockY = e.pageY - builderAreaY - activeNode.clientHeight / 2;

        if (isBuilderAreaX && isBuilderAreaY) {
            addElement({ ...data, x: blockX, y: blockY });
        }

        activeNode.className = '';
        setActiveNode(null);
        clearActive();
    };
    return (
        <div className="builder" onMouseMove={mouseDragMove}>
            <Sidebar
                tags={tags}
                mouseDragDown={mouseDragDown}
                mouseDragUp={mouseDragUp}
                active={active}
            />
            <div ref={builderArea} id="builder-area">
                <Grid
                    cellWidth={cellWidth}
                    cellHeight={cellHeight}
                    rows={rows}
                    columns={columns}
                    setRows={setRows}
                    setColumns={setColumns}
                />

                <Layout />

                {idActiveElement && <Navigate />}
            </div>
        </div>
    );
}

Builder.propTypes = {
    cellWidth: PropTypes.number.isRequired,
    cellHeight: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
    active: PropTypes.object,
    tags: PropTypes.arrayOf(PropTypes.object),
    columns: PropTypes.number.isRequired,
    setColumns: PropTypes.func.isRequired,
    addElement: PropTypes.func.isRequired,
    setBuilderAreaCords: PropTypes.func.isRequired,
    setRows: PropTypes.func.isRequired,
    setActive: PropTypes.func.isRequired,
    clearActive: PropTypes.func.isRequired,
    builderAreaX: PropTypes.number,
    builderAreaY: PropTypes.number,
    idActiveElement: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    cellWidth: state.builder.cellWidth,
    cellHeight: state.builder.cellHeight,
    rows: state.builder.rows,
    tags: state.builder.tags,
    columns: state.builder.columns,
    active: state.builder.active,
    builderAreaX: state.builder.builderAreaX,
    builderAreaY: state.builder.builderAreaY,
    idActiveElement: state.builder.idActiveElement,
});

const mapDispathToProps = {
    setRows: setRowsAction,
    setColumns: setColumnsAction,
    setActive: setActiveAction,
    addElement: addElementAction,
    clearActive: clearActiveAction,
    setIdActiveElement: setIdActiveElementAction,
    clearIdActiveElement: clearIdActiveElementAction,
    setBuilderAreaCords: setBuilderAreaCordsAction,
    updateElement: updateElementAction,
};

export default connect(mapStateToProps, mapDispathToProps)(Builder);
