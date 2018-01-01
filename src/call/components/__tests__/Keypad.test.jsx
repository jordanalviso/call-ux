import React from 'react';
import { mount } from 'enzyme';
import { Keypad } from 'call/components/Keypad';

describe('Component: <Keypad />', () => {
  it('should render self', () => {
    const wrapper = mount(<Keypad calling={false} />);
    expect(wrapper.find('.keypad')).toHaveLength(1);
  });
  it('should render children', () => {
    const wrapper = mount(
      <Keypad calling={false}>
        <div className="foo" />
      </Keypad>,
    );
    expect(wrapper.find('.foo')).toHaveLength(1);
  });
  it('should set calling property', () => {
    const wrapper = mount(<Keypad calling />);
    expect(wrapper.props().calling).toBe(true);
  });
  describe('Layout:', () => {
    it('should be hidden if calling', () => {
      const wrapper = mount(<Keypad calling />);
      expect(wrapper.find('.keypad').props().style.visibility).toEqual('hidden');
    });
    it('should be visible if not calling', () => {
      const wrapper = mount(<Keypad calling={false} />);
      expect(wrapper.find('.keypad').props().style.visibility).toEqual('visible');
    });
  });
});
