import React from 'react';
import { mount } from 'enzyme';
import { DeleteKey } from 'call/components/DeleteKey';

function setupProps() {
  return {
    pressDeleteKey: jest.fn(),
    highlightKey: jest.fn(),
  };
}

describe('Component: <DeleteKey />', () => {
  it('should render self', () => {
    const wrapper = mount(<DeleteKey {...setupProps()} />);
    expect(wrapper.find('.delete-key')).toHaveLength(1);
  });
  it('should call pressDeleteKey and highlightKey if event target recieves mousedown', () => {
    const wrapper = mount(<DeleteKey {...setupProps()} />);
    expect(wrapper.props().pressDeleteKey.mock.calls.length).toBe(0);
    expect(wrapper.props().highlightKey.mock.calls.length).toBe(0);
    wrapper.find('.event-target').simulate('mousedown');
    expect(wrapper.props().pressDeleteKey.mock.calls.length).toBe(1);
    expect(wrapper.props().highlightKey.mock.calls.length).toBe(1);
  });
});
