import { element } from '../mock';
import {
    updateElementAction,
    addElementAction,
    ADD_ELEMENT,
    UPDATE_ACTIVE_ELEMENT,
} from '../redux/actions';


describe('Message list functionality', () => {
    test('should set element action', () => {
        expect(addElementAction(element))
            .toEqual({ type: ADD_ELEMENT, element });
    });

    test('should set project action', () => {
        const text = 'new my value';
        expect(updateElementAction({ text }))
            .toEqual({ type: UPDATE_ACTIVE_ELEMENT, element: { text } });
    });
});
