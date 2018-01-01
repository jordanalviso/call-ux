import { CLEAR_NUMBER } from 'call/actions/number';
import {
  PRESS_DELETE_KEY,
  PRESS_KEY,
} from 'call/actions/key';
import reducer from 'call/reducers/number';

describe('Reducer: number', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });
  it('should handle CLEAR_NUMBER', () => {
    const action = {
      type: CLEAR_NUMBER,
    };
    expect(reducer('', action)).toEqual('');
    expect(reducer('12', action)).toEqual('');
    expect(reducer('123-4', action)).toEqual('');
    expect(reducer('123-456-7', action)).toEqual('');
    expect(reducer('123-456-78', action)).toEqual('');
  });
  it('should handle PRESS_DELETE_KEY', () => {
    const action = {
      type: PRESS_DELETE_KEY,
    };
    expect(reducer('', action)).toEqual('');
    expect(reducer('12', action)).toEqual('1');
    expect(reducer('123-4', action)).toEqual('123');
    expect(reducer('123-456-7', action)).toEqual('123-456');
    expect(reducer('123-456-78', action)).toEqual('123-456-7');
  });
  it('should handle PRESS_KEY', () => {
    const action = {
      type: PRESS_KEY,
      value: 1,
    };
    expect(reducer('', action)).toEqual('1');
    expect(reducer('123', action)).toEqual('123-1');
    expect(reducer('123-4', action)).toEqual('123-41');
    expect(reducer('123-456', action)).toEqual('123-456-1');
    expect(reducer('123-456-78', action)).toEqual('123-456-781');
  });
});
