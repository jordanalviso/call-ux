import React from 'react';
import { mount } from 'enzyme';
import { HighlightKey } from 'call/components/HighlightKey';

function setupProps() {
  return {
    highlightKey: jest.fn(),
    pressDeleteKey: jest.fn(),
    pressKey: jest.fn(),
    releaseKey: jest.fn(),
  };
}

describe('Component: <HighlightKey />', () => {
  it('should render self', () => {
    const highlightKeyPool = {
      available: [0, 1, 2, 3, 4, 5],
      busy: {},
    };
    const wrapper = mount(<HighlightKey highlightKeyPool={highlightKeyPool} {...setupProps()} />);
    expect(wrapper.find('.highlight-key')).toHaveLength(1);
  });
  it('should skip cancel if HighlightKey is not busy (cancelHighlight)', () => {
    const highlightKeyPool = {
      available: [0, 1, 2, 3, 4, 5],
      busy: {},
    };
    const wrapper = mount(<HighlightKey id={0} highlightKeyPool={highlightKeyPool} {...setupProps()} />);
    expect(wrapper.props().highlightKey.mock.calls.length).toBe(0);
    expect(wrapper.props().pressDeleteKey.mock.calls.length).toBe(0);
    expect(wrapper.props().pressKey.mock.calls.length).toBe(0);
    expect(wrapper.props().releaseKey.mock.calls.length).toBe(0);
    wrapper.find('.highlight-key').simulate('mousedown');
    expect(wrapper.props().highlightKey.mock.calls.length).toBe(0);
    expect(wrapper.props().pressDeleteKey.mock.calls.length).toBe(0);
    expect(wrapper.props().pressKey.mock.calls.length).toBe(0);
    expect(wrapper.props().releaseKey.mock.calls.length).toBe(0);
  });
  it('should call highlightKey, pressKey, releaseKey, and reset state (cancelHighlight)', () => {
    const highlightKeyPool = {
      available: [1, 2, 3, 4, 5],
      busy: {
        0: {
          key: 1,
          transform: 'translate3d(15px, 0px, 0)',
        },
      },
    };
    const wrapper = mount(<HighlightKey id={0} highlightKeyPool={highlightKeyPool} {...setupProps()} />);
    wrapper.setState({
      fadingDown: true,
      keyReleased: true,
    });
    expect(wrapper.state().fadingDown).toBe(true);
    expect(wrapper.state().keyReleased).toBe(true);
    expect(wrapper.props().highlightKey.mock.calls.length).toBe(0);
    expect(wrapper.props().pressDeleteKey.mock.calls.length).toBe(0);
    expect(wrapper.props().pressKey.mock.calls.length).toBe(0);
    expect(wrapper.props().releaseKey.mock.calls.length).toBe(0);
    wrapper.find('.highlight-key').simulate('mousedown');
    expect(wrapper.props().highlightKey.mock.calls.length).toBe(1);
    expect(wrapper.props().pressDeleteKey.mock.calls.length).toBe(0);
    expect(wrapper.props().pressKey.mock.calls.length).toBe(1);
    expect(wrapper.props().releaseKey.mock.calls.length).toBe(1);
    expect(wrapper.state().fadingDown).toBe(false);
    expect(wrapper.state().keyReleased).toBe(false);
  });
  it('should call highlightKey, pressDeleteKey, releaseKey, and reset state (cancelHighlight)', () => {
    const highlightKeyPool = {
      available: [1, 2, 3, 4, 5],
      busy: {
        0: {
          key: 'delete',
          transform: 'translate3d(15px, 0px, 0)',
        },
      },
    };
    const wrapper = mount(<HighlightKey id={0} highlightKeyPool={highlightKeyPool} {...setupProps()} />);
    wrapper.setState({
      fadingDown: true,
      keyReleased: true,
    });
    expect(wrapper.state().fadingDown).toBe(true);
    expect(wrapper.state().keyReleased).toBe(true);
    expect(wrapper.props().highlightKey.mock.calls.length).toBe(0);
    expect(wrapper.props().pressDeleteKey.mock.calls.length).toBe(0);
    expect(wrapper.props().pressKey.mock.calls.length).toBe(0);
    expect(wrapper.props().releaseKey.mock.calls.length).toBe(0);
    wrapper.find('.highlight-key').simulate('mousedown');
    expect(wrapper.props().highlightKey.mock.calls.length).toBe(1);
    expect(wrapper.props().pressDeleteKey.mock.calls.length).toBe(1);
    expect(wrapper.props().pressKey.mock.calls.length).toBe(0);
    expect(wrapper.props().releaseKey.mock.calls.length).toBe(1);
    expect(wrapper.state().fadingDown).toBe(false);
    expect(wrapper.state().keyReleased).toBe(false);
  });
  it('should set keyReleased state to true when recieving mouseup events (handleMouseUp)', () => {
    const highlightKeyPool = {
      available: [1, 2, 3, 4, 5],
      busy: {
        0: {
          key: 1,
          transform: 'translate3d(15px, 0px, 0)',
        },
      },
    };
    const wrapper = mount(<HighlightKey id={0} highlightKeyPool={highlightKeyPool} {...setupProps()} />);
    expect(wrapper.state().keyReleased).toBe(false);
    wrapper.find('.highlight-key').simulate('mouseup');
    expect(wrapper.state().keyReleased).toBe(true);
  });
  it('should set keyReleased state to true when recieving mouseleave events (handleMouseLeave)', () => {
    const highlightKeyPool = {
      available: [1, 2, 3, 4, 5],
      busy: {
        0: {
          key: 1,
          transform: 'translate3d(15px, 0px, 0)',
        },
      },
    };
    const wrapper = mount(<HighlightKey id={0} highlightKeyPool={highlightKeyPool} {...setupProps()} />);
    expect(wrapper.state().keyReleased).toBe(false);
    wrapper.find('.highlight-key').simulate('mouseleave');
    expect(wrapper.state().keyReleased).toBe(true);
  });
  it('should reset state, and call releaseKey to true when recieving transitionend events (handleTransitionEnd)', () => {
    const highlightKeyPool = {
      available: [1, 2, 3, 4, 5],
      busy: {
        0: {
          key: 1,
          transform: 'translate3d(15px, 0px, 0)',
        },
      },
    };
    const wrapper = mount(<HighlightKey id={0} highlightKeyPool={highlightKeyPool} {...setupProps()} />);
    wrapper.setState({
      fadingDown: true,
      keyReleased: true,
    });
    expect(wrapper.state().fadingDown).toBe(true);
    expect(wrapper.state().keyReleased).toBe(true);
    expect(wrapper.props().releaseKey.mock.calls.length).toBe(0);
    wrapper.find('.highlight-key').simulate('transitionend');
    expect(wrapper.state().fadingDown).toBe(false);
    expect(wrapper.state().keyReleased).toBe(false);
    expect(wrapper.props().releaseKey.mock.calls.length).toBe(1);
  });
  it('should set fadingDown state to true when recieving transitionend events (handleTransitionEnd)', () => {
    const highlightKeyPool = {
      available: [1, 2, 3, 4, 5],
      busy: {
        0: {
          key: 1,
          transform: 'translate3d(15px, 0px, 0)',
        },
      },
    };
    const wrapper = mount(<HighlightKey id={0} highlightKeyPool={highlightKeyPool} {...setupProps()} />);
    expect(wrapper.state().fadingDown).toBe(false);
    wrapper.find('.highlight-key').simulate('transitionend');
    expect(wrapper.state().fadingDown).toBe(true);
  });
  describe('Layout:', () => {
    it('should be faded up', () => {
      const highlightKeyPool = {
        available: [1, 2, 3, 4, 5],
        busy: {
          0: {
            key: 1,
            transform: 'translate3d(15px, 0px, 0)',
          },
        },
      };
      const wrapper = mount(<HighlightKey id={0} highlightKeyPool={highlightKeyPool} {...setupProps()} />);
      expect(wrapper.find('.highlight-key').props().style).toEqual({
        transform: 'translate3d(15px, 0px, 0)',
        transition: 'opacity 100ms ease',
        opacity: 1,
      });
    });
    it('should be faded down', () => {
      const highlightKeyPool = {
        available: [1, 2, 3, 4, 5],
        busy: {
          0: {
            key: 1,
            transform: 'translate3d(15px, 0px, 0)',
          },
        },
      };
      const wrapper = mount(<HighlightKey id={0} highlightKeyPool={highlightKeyPool} {...setupProps()} />);
      wrapper.setState({
        fadingDown: true,
        keyReleased: true,
      });
      expect(wrapper.find('.highlight-key').props().style).toEqual({
        transform: 'translate3d(15px, 0px, 0)',
        transition: 'opacity 400ms ease',
        opacity: 0.0001,
      });
    });
    it('should be reset', () => {
      const highlightKeyPool = {
        available: [1, 2, 3, 4, 5, 0],
        busy: {},
      };
      const wrapper = mount(<HighlightKey highlightKeyPool={highlightKeyPool} {...setupProps()} />);
      expect(wrapper.find('.highlight-key').props().style).toEqual({
        transform: 'translate3d(-78px, 0px, 0)',
        opacity: 0.0001,
      });
    });
  });
});
