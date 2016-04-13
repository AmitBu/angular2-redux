/**
 * Created by amit on 4/12/16.
 */
import * as LIST from '../constansts/list-events'


export function list (state = {items: []}, action) {
    switch (action.type) {
        case LIST.ADD_ITEM:
            return Object.assign({}, state, { items: state.items.concat([action.data]) });
        // case LIST.DELETE_ITEM:
        //     return {...state, items: [...state.items].splice(action.index, 1)};
        // case LIST.CLEAR_ITEMS:
        //     return {...state, items: []};
        default:
            return state;
    }
}