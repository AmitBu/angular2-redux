import * as ACTIONS from '../constansts/app-events';

export function changeTitle(title) {
    return {
        type: ACTIONS.CHANGE_TITLE,
        data: title || ""
    }
}