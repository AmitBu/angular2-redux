import {applyMiddleware, compose} from 'redux'
import {logger} from './logger';

export const middlewars =  compose(applyMiddleware(logger));
