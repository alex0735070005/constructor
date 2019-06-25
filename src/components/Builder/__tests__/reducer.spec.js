import Reducer, { initialState } from '../redux/reducer';
import dataTags from '../redux/dataTags';
import { getElementById } from '../mock';

import {
    updateElementAction,
} from '../redux/actions';

describe('builder', () => {
    test('should initial state', () => {
        expect(Reducer(undefined, {})).toEqual({
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
        });
    });

    test('should update element action', () => {
        const idActiveElement = '5f0f30aa-9f97-4414-897b-a0452665a418';
        const text = 'my new text value';
        expect(
            Reducer({ ...initialState, idActiveElement, getElementById }, updateElementAction({ text })),
        ).toEqual({
            ...initialState,
            idActiveElement,
            getElementById: { ...getElementById, [idActiveElement]: { ...getElementById[idActiveElement], text } },
        });
    });
});
