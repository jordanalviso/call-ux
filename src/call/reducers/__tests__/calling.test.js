import { PRESS_CALL_KEY } from 'call/actions/key';
import reducer from 'call/reducers/calling';

describe('Reducer: calling', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(false);
  });
  it('should handle PRESS_CALL_KEY', () => {
    const action = {
      type: PRESS_CALL_KEY,
    };
    expect(reducer(false, action)).toEqual(true);
  });
});
