import React from 'react';
import { mount } from 'enzyme';
import { CallKey } from 'call/components/CallKey';

function setupProps() {
  return {
    clearNumber: jest.fn(),
    pressCallKey: jest.fn(),
    resetTimer: jest.fn(),
    startTimer: jest.fn(),
    tickTimer: jest.fn(),
  };
}

describe('Component: <CallKey />', () => {
  it('should render self', () => {
    const wrapper = mount(<CallKey {...setupProps()} />);
    expect(wrapper.find('.call-key')).toHaveLength(1);
  });
  it('should call pressCallKey and startTimer if event target recieves mousedown', () => {
    const wrapper = mount(<CallKey {...setupProps()} />);
    expect(wrapper.props().pressCallKey.mock.calls.length).toBe(0);
    expect(wrapper.props().startTimer.mock.calls.length).toBe(0);
    wrapper.find('.event-target-layer').simulate('mousedown');
    expect(wrapper.props().pressCallKey.mock.calls.length).toBe(1);
    expect(wrapper.props().startTimer.mock.calls.length).toBe(1);
  });
  it('should call pressCallKey, clearNumber, and resetTimer if event target recieves mousedown', () => {
    const wrapper = mount(<CallKey calling {...setupProps()} />);
    expect(wrapper.props().pressCallKey.mock.calls.length).toBe(0);
    expect(wrapper.props().clearNumber.mock.calls.length).toBe(0);
    expect(wrapper.props().resetTimer.mock.calls.length).toBe(0);
    wrapper.find('.event-target-layer').simulate('mousedown');
    expect(wrapper.props().pressCallKey.mock.calls.length).toBe(1);
    expect(wrapper.props().clearNumber.mock.calls.length).toBe(1);
    expect(wrapper.props().resetTimer.mock.calls.length).toBe(1);
  });
  describe('Layout:', () => {
    it('should be red and rotated 135deg if calling', () => {
      const wrapper = mount(<CallKey calling {...setupProps()} />);
      expect(wrapper.find('.call-key-red').props().style).toEqual({
        transition: 'opacity 400ms ease',
        opacity: 1,
      });
      expect(wrapper.find('.call-key-icon').props().style).toEqual({
        transition: 'transform 400ms ease',
        transform: 'rotate3d(0, 0, 1, 135deg)',
      });
    });
    it('should be green and rotated 0deg if not calling', () => {
      const wrapper = mount(<CallKey {...setupProps()} />);
      expect(wrapper.find('.call-key-red').props().style).toEqual({
        transition: 'opacity 400ms ease',
        opacity: 0.0001,
      });
      expect(wrapper.find('.call-key-icon').props().style).toEqual({
        transition: 'transform 400ms ease',
        transform: 'rotate3d(0, 0, 1, 0deg)',
      });
    });
  });
});
