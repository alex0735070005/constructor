import uuid from 'uuid';
import dataTags from './dataTags';

import {
    SET_ROWS,
    SET_ACTIVE,
    SET_COLUMNS,
    CLEAR_ACTIVE,
    ADD_ELEMENT,
    SET_BUILDER_AREA_CORDS,
} from './actions';

const initialState = {
    tags: dataTags,
    elements: [],
    active: {},
    cellHeight: 25,
    cellWidth: 25,
    builderAreaX: 0,
    builderAreaY: 0,
    rows: 0,
    columns: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ROWS: {
            return {
                ...state,
                rows: Math.round(action.rows),
            };
        }

        case SET_COLUMNS: {
            return {
                ...state,
                columns: Math.round(action.columns),
            };
        }

        case SET_ACTIVE: {
            return {
                ...state,
                active: action.active,
            };
        }

        case ADD_ELEMENT: {
            return {
                ...state,
                elements: [...state.elements, { ...action.element, id: uuid() }],
            };
        }

        case CLEAR_ACTIVE: {
            return {
                ...state,
                active: {},
            };
        }

        case SET_BUILDER_AREA_CORDS: {
            return {
                ...state,
                builderAreaX: action.builderAreaX,
                builderAreaY: action.builderAreaY,
            };
        }
        default: return state;
    }
}
