/**
 * Created by amit on 4/12/16.
 */

// Middleware template
const logger = state => next => action => {
    console.log(action);
    console.log(state);
    return next(action);
};