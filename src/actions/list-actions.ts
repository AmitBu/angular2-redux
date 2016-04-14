import * as LIST from '../constansts/list-events'

export function addItem(item) {
    return {
        type: LIST.ADD_ITEM,
        data: item
    };
}

export function removeItem(index) {
    return {
        type: LIST.DELETE_ITEM,
        data: index
    }
}


export function clearAllItems() {
    return {
        type: LIST.CLEAR_ITEMS
    }
}
