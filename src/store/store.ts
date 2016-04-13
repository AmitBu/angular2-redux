import { createStore, combineReducers } from 'redux'
import { list } from '../reducers/list-reducer'
import { app } from '../reducers/app-reducer'

const state = {
    app: {
        title: 'My app sssss'
    },
    list: {
        items: ["asdad","asdasd","asdasd", "Nir"]
    }
};

const reducer = combineReducers({ app, list });

export const store = createStore(reducer, state);
