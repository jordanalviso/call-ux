import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import HighlightKeyPool from 'call/components/HighlightKeyPool';
import { HighlightKey } from 'call/components/HighlightKey';
import state from 'app/store';
import { HIGHLIGHT_KEY_POOL_SIZE } from 'call/constants/HighlightKeyPool';

describe('Component: <HighlightKeyPool />', () => {
  it('should render self', () => {
    const wrapper = mount(
      <Provider store={state}>
        <HighlightKeyPool />
      </Provider>,
    );
    expect(wrapper.find(HighlightKey)).toHaveLength(HIGHLIGHT_KEY_POOL_SIZE);
  });
});
