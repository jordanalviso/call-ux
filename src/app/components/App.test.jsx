import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import App from 'app/components/App';
import state from 'app/store';

describe('Component: <App />', () => {
  it('should render self', () => {
    const wrapper = mount(
      <Provider store={state}>
        <App />
      </Provider>,
    );
    expect(wrapper.find('App')).toHaveLength(1);
  });
});
