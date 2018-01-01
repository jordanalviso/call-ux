import {
  RESET_TIMER,
  START_TIMER,
  TICK_TIMER,
  resetTimer,
  startTimer,
  tickTimer,
} from 'call/actions/time';

describe('Action: time', () => {
  it('should create a RESET_TIMER action', () => {
    const expectedAction = {
      type: RESET_TIMER,
    };
    expect(resetTimer()).toEqual(expectedAction);
  });
  it('should create a START_TIMER action', () => {
    const timer = 10;
    const expectedAction = {
      type: START_TIMER,
      timer,
    };
    expect(startTimer(timer)).toEqual(expectedAction);
  });
  it('should create a TICK_TIMER action', () => {
    const expectedAction = {
      type: TICK_TIMER,
    };
    expect(tickTimer()).toEqual(expectedAction);
  });
});
