import React from 'react';
import { mount } from 'enzyme';
import { Key } from 'call/components/Key';

function setupProps() {
  return {
    pressKey: jest.fn(),
    highlightKey: jest.fn(),
  };
}

describe('Component: <Key />', () => {
  it('should render self', () => {
    const wrapper = mount(<Key value="2" alias="ABC" {...setupProps()} />);
    expect(wrapper.find('.key')).toHaveLength(1);
  });
  it('should set value property', () => {
    const wrapper = mount(<Key value="2" {...setupProps()} />);
    expect(wrapper.props().value).toEqual('2');
  });
  it('should set alias property', () => {
    const wrapper = mount(<Key alias="ABC" {...setupProps()} />);
    expect(wrapper.props().alias).toEqual('ABC');
  });
  it('should set special property', () => {
    const wrapper = mount(<Key special {...setupProps()} />);
    expect(wrapper.props().special).toBe(true);
  });
  it('should render a normal key with value and alias properties', () => {
    const wrapper = mount(<Key value="2" alias="ABC" {...setupProps()} />);
    expect(wrapper.find('.key-value').text()).toEqual('2');
    expect(wrapper.find('.key-alias').text()).toEqual('ABC');
  });
  it('should render a normal key with only a value property', () => {
    const wrapper = mount(<Key value="1" {...setupProps()} />);
    expect(wrapper.find('.key-value').text()).toEqual('1');
    expect(wrapper.find('.key-alias').text()).toEqual('');
  });
  it('should render a special key with a value property', () => {
    const wrapper = mount(<Key value="1" special {...setupProps()} />);
    expect(wrapper.find('.key-special').text()).toEqual('1');
  });
  it('should call pressKey and highlightKey if event target recieves mousedown', () => {
    const wrapper = mount(<Key value="1" alias="ABC" {...setupProps()} />);
    expect(wrapper.props().pressKey.mock.calls.length).toBe(0);
    expect(wrapper.props().highlightKey.mock.calls.length).toBe(0);
    wrapper.find('.event-target').simulate('mousedown');
    expect(wrapper.props().pressKey.mock.calls.length).toBe(1);
    expect(wrapper.props().highlightKey.mock.calls.length).toBe(1);
  });
});
