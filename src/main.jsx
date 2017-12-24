import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'app/components/App';

import store from 'app/store';
import {
  onLoad,
} from 'app/events';

// global events
window.addEventListener('load', onLoad, false);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
