/**
 * Created by amit on 4/12/16.
 */

import * as ACTIONS from '../constansts/app-events';

export function changeTitle(title) {
    return {
        type: ACTIONS.CHANGE_TITLE,
        data: title || ""
    }
}