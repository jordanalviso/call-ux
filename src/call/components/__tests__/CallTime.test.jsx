import React from 'react';
import { mount } from 'enzyme';
import { CallTime } from 'call/components/CallTime';

describe('Component: <CallTime />', () => {
  it('should render self', () => {
    const wrapper = mount(<CallTime />);
    expect(wrapper.find('.time')).toHaveLength(1);
  });
  it('should set calling property', () => {
    const wrapper = mount(<CallTime calling />);
    expect(wrapper.props().calling).toBe(true);
  });
  it('should set data property', () => {
    const wrapper = mount(<CallTime data={60} />);
    expect(wrapper.props().data).toEqual(60);
  });
  it('should render data', () => {
    const wrapper = mount(<CallTime data={60} />);
    expect(wrapper.find('.time-data').text()).toEqual('01:00');
  });
  describe('Layout:', () => {
    it('should be hidden if not calling', () => {
      const wrapper = mount(<CallTime calling={false} />);
      expect(wrapper.find('.time').props().style.visibility).toEqual('hidden');
    });
    it('should be visible if calling', () => {
      const wrapper = mount(<CallTime calling />);
      expect(wrapper.find('.time').props().style.visibility).toEqual('visible');
    });
  });
});
