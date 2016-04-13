import { createStore, combineReducers } from 'redux'
import { list } from '../reducers/list-reducer'
import { app } from '../reducers/app-reducer'

const state = {
    app: {
        title: 'My test app'
    },
    list: {
        items: ["Item1", "Item2", "Item3"]
    }
};

const reducer = combineReducers({ app, list });

export const store = createStore(reducer, state);
