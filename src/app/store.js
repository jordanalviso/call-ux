import {
  createStore,
  compose,
} from 'redux';
import rootReducer from './reducer';

const composeEnhancers = (process.env.NODE_ENV === 'development') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : null;
const store = (process.env.NODE_ENV !== 'development') ? createStore(rootReducer)
  : createStore(rootReducer, composeEnhancers());

export const dispatch = store.dispatch;
export const getState = store.getState;

export default store;
