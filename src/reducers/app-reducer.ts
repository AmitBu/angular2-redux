import * as ACTIONS from '../constansts/app-events';

export function app (state = {}, action) {
    switch (action.type) {
        case ACTIONS.CHANGE_TITLE:
            return Object.assign({}, state, { title: action.data });
        default:
            return state;
    }
}