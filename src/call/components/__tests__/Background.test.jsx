import React from 'react';
import { mount } from 'enzyme';
import Background from 'call/components/Background';

describe('Component: <Background />', () => {
  it('should render self', () => {
    const wrapper = mount(<Background className="starry-night" />);
    expect(wrapper.find('.starry-night')).toHaveLength(2);
    expect(wrapper.find('.overlay')).toHaveLength(1);
  });
  it('should render children', () => {
    const wrapper = mount(
      <Background className="starry-night">
        <div className="foo" />
      </Background>,
    );
    expect(wrapper.find('.foo')).toHaveLength(1);
  });
  it('should set className property', () => {
    const wrapper = mount(<Background className="starry-night" />);
    expect(wrapper.props().className).toEqual('starry-night');
  });
});
