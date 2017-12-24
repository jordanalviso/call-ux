import React from 'react';
import jsdom from 'jsdom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../src/core/reducer';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
global.localStorage = global.localStorage;

export function provide(ComponentClass, props = {}, state = {}) {
  return (
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
}
