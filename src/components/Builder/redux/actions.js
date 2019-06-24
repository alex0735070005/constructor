export const SET_ACTIVE = 'SET_ACTIVE';
export const CLEAR_ACTIVE = 'CLEAR_ACTIVE';
export const SET_ROWS = 'SET_ROWS';
export const ADD_ELEMENT = 'ADD_ELEMENT';
export const SET_COLUMNS = 'SET_COLUMNS';
export const SET_BUILDER_AREA_CORDS = 'SET_BUILDER_AREA_CORDS';

export const setActiveAction = active => ({ type: SET_ACTIVE, active });
export const clearActiveAction = () => ({ type: CLEAR_ACTIVE });
export const setColumnsAction = columns => ({ type: SET_COLUMNS, columns });
export const setRowsAction = rows => ({ type: SET_ROWS, rows });
export const addElementAction = element => ({ type: ADD_ELEMENT, element });
export const setBuilderAreaCordsAction = (builderAreaX, builderAreaY) => ({
    type: SET_BUILDER_AREA_CORDS,
    builderAreaX,
    builderAreaY,
});
