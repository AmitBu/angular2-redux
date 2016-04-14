// Middleware template
const logger = state => next => action => {
    console.log(action);
    console.log(state);
    return next(action);
};