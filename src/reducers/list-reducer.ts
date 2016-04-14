import * as LIST from '../constansts/list-events'


export function list (state = {items: []}, action) {
    switch (action.type) {
        case LIST.ADD_ITEM:
            return Object.assign({}, state, { items: state.items.concat([action.data]) });
        case LIST.DELETE_ITEM:
            return Object.assign({}, state, { items: state.items.filter((val,key) => key != action.data) });
        case LIST.CLEAR_ITEMS:
            return Object.assign({}, state, { items: [] });
        default:
            return state;
    }
}