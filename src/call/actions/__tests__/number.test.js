import {
  CLEAR_NUMBER,
  clearNumber,
} from 'call/actions/number';

describe('Action: number', () => {
  it('should create a CLEAR_NUMBER action', () => {
    const expectedAction = {
      type: CLEAR_NUMBER,
    };
    expect(clearNumber()).toEqual(expectedAction);
  });
});
