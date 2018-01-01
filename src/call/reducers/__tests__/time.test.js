import {
  RESET_TIMER,
  START_TIMER,
  TICK_TIMER,
} from 'call/actions/time';
import reducer from 'call/reducers/time';

describe('Reducer: time', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      counter: 0,
      timer: null,
    });
  });
  it('should handle RESET_TIMER', () => {
    const state = {
      counter: 123,
      timer: 10,
    };
    const action = {
      type: RESET_TIMER,
    };
    expect(reducer(state, action)).toEqual({
      counter: 0,
      timer: null,
    });
  });
  it('should handle START_TIMER', () => {
    const state = {
      counter: 0,
      timer: null,
    };
    const timer = 10;
    const action = {
      type: START_TIMER,
      timer,
    };
    expect(reducer(state, action)).toEqual({
      counter: 0,
      timer: 10,
    });
  });
  it('should handle TICK_TIMER', () => {
    const state = {
      counter: 0,
      timer: 10,
    };
    const action = {
      type: TICK_TIMER,
    };
    expect(reducer(state, action)).toEqual({
      counter: 1,
      timer: 10,
    });
  });
});
