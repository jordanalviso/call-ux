import React from 'react';
import { mount } from 'enzyme';
import NumberDisplay from 'call/components/NumberDisplay';

describe('Component: <NumberDisplay />', () => {
  it('should render self', () => {
    const wrapper = mount(<NumberDisplay />);
    expect(wrapper.find('.number-display')).toHaveLength(1);
  });
  it('should set data property', () => {
    const wrapper = mount(<NumberDisplay data="123" />);
    expect(wrapper.props().data).toEqual('123');
  });
  it('should render data', () => {
    const wrapper = mount(<NumberDisplay data="123" />);
    expect(wrapper.find('.number-data').text()).toEqual('123');
  });
});
