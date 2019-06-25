import uuid from 'uuid';
import dataTags from './dataTags';

import {
    SET_ROWS,
    SET_ACTIVE,
    SET_COLUMNS,
    CLEAR_ACTIVE,
    ADD_ELEMENT,
    SET_BUILDER_AREA_CORDS,
    CLEAR_ID_ACTIVE_ELEMENT,
    SET_ID_ACTIVE_ELEMENT,
    UPDATE_ACTIVE_ELEMENT,
} from './actions';

const initialState = {
    tags: dataTags,
    getElementById: {},
    elementIds: [],
    active: {},
    idActiveElement: '',
    cellHeight: 24,
    cellWidth: 24,
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

        case ADD_ELEMENT: {
            const newElement = { ...action.element, id: uuid() };
            return {
                ...state,
                getElementById: { ...state.getElementById, [newElement.id]: newElement },
                elementIds: [...state.elementIds, newElement.id],
                idActiveElement: newElement.id,
            };
        }

        case UPDATE_ACTIVE_ELEMENT: {
            return {
                ...state,
                getElementById: {
                    ...state.getElementById,
                    [state.idActiveElement]: {
                        ...state.getElementById[state.idActiveElement],
                        ...action.element,
                    },
                },
            };
        }

        case SET_ACTIVE: {
            return {
                ...state,
                active: action.active,
            };
        }


        case CLEAR_ACTIVE: {
            return {
                ...state,
                active: {},
            };
        }

        case CLEAR_ID_ACTIVE_ELEMENT: {
            return {
                ...state,
                idActiveElement: '',
            };
        }

        case SET_ID_ACTIVE_ELEMENT: {
            return {
                ...state,
                idActiveElement: action.idActiveElement,
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
