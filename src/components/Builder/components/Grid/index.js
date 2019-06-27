import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Grid({
    cellWidth,
    cellHeight,
}) {
    const gridContainer = useRef();
    const gridCanvas = useRef();

    const setGrid = (ctx, clientWidth, clientHeight) => {
        for (let y = 0; y <= clientHeight; y += cellHeight) {
            for (let x = 0; x <= clientWidth; x += cellWidth) {
                ctx.strokeRect(x, y, cellWidth, cellHeight);
            }
        }
    };

    useEffect(() => {
        const clientHeight = gridContainer.current.clientHeight;
        const clientWidth = gridContainer.current.clientWidth;
        gridCanvas.current.width = clientWidth;
        gridCanvas.current.height = clientHeight;
        const ctx = gridCanvas.current.getContext('2d');
        ctx.strokeStyle = '#ccc';
        setGrid(ctx, clientWidth, clientHeight);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div ref={gridContainer} className="builder-grid">
            <canvas ref={gridCanvas} />
        </div>
    );
}

Grid.propTypes = {
    cellWidth: PropTypes.number.isRequired,
    cellHeight: PropTypes.number.isRequired,
};

export default Grid;
