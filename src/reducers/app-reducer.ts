/**
 * Created by amit on 4/12/16.
 */

import * as ACTIONS from '../constansts/app-events';

export function app (state = {}, action) {
    switch (action.type) {
        case ACTIONS.CHANGE_TITLE:
            return Object.assign({}, state, { title: action.data });
        default:
            return state;
    }
}