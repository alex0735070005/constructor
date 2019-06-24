import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Grid({
    cellWidth,
    cellHeight,
    rows,
    columns,
    setColumns,
    setRows,
}) {
    const gridContainer = React.createRef();

    useEffect(() => {
        const clientHeight = gridContainer.current.clientHeight;
        const clientWidth = gridContainer.current.clientWidth;

        const rowsNums = clientHeight / cellHeight;
        const columnsNums = clientWidth / cellWidth;

        setColumns(columnsNums);
        setRows(rowsNums);
    });

    const lengthBloks = rows * columns;

    const gridBloks = [];

    for (let i = 0; i < lengthBloks; i++) {
        gridBloks.push(<div style={{ width: cellWidth, height: cellHeight }} key={i} />);
    }

    return (
        <div ref={gridContainer} className="builder-grid">
            {gridBloks}
        </div>
    );
}

Grid.propTypes = {
    cellWidth: PropTypes.number.isRequired,
    cellHeight: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    setColumns: PropTypes.func.isRequired,
    setRows: PropTypes.func.isRequired,
};

export default Grid;
