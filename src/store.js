import {createStore, applyMiddleware, compose} from 'redux'
import {logger, createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

const loggerMiddleware = createLogger({collapsed: true});

let middleware = [thunk, logger, loggerMiddleware];

export const configureStore = (initialState, reducer) => {
  const enhancer = compose(
    applyMiddleware(...middleware)
  );
  return createStore(
    reducer,
    initialState,
    enhancer
  );
};
