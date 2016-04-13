/**
 * Created by amit on 4/12/16.
 */
import * as LIST from '../constansts/list-events'

export function addItem (item){
    return {
        type: LIST.ADD_ITEM,
        data: item
    };
}

export function removeItem(index) {
    return {
        type: LIST.DELETE_ITEM,
        index: index
    }
}


export function clearAllItems() {
    return {
        type: LIST.CLEAR_ITEMS
    }
}