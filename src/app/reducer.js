import { combineReducers } from 'redux';

/* reducers */
import appReady from 'app/reducers/appReady';
import calling from 'call/reducers/calling';
import highlightKeyPool from 'call/reducers/highlightKeyPool';
import number from 'call/reducers/number';
import time from 'call/reducers/time';

const rootReducer = combineReducers({
  appReady,
  calling,
  highlightKeyPool,
  number,
  time,
});

export default rootReducer;
