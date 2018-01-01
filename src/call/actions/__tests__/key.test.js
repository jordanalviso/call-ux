import {
  HIGHLIGHT_KEY,
  PRESS_CALL_KEY,
  PRESS_DELETE_KEY,
  PRESS_KEY,
  RELEASE_KEY,
  highlightKey,
  pressCallKey,
  pressDeleteKey,
  pressKey,
  releaseKey,
} from 'call/actions/key';

describe('Action: key', () => {
  it('should create a HIGHLIGHT_KEY action', () => {
    const key = 1;
    const expectedAction = {
      type: HIGHLIGHT_KEY,
      key,
    };
    expect(highlightKey(key)).toEqual(expectedAction);
  });
  it('should create a PRESS_CALL_KEY action', () => {
    const expectedAction = {
      type: PRESS_CALL_KEY,
    };
    expect(pressCallKey()).toEqual(expectedAction);
  });
  it('should create a PRESS_DELETE_KEY action', () => {
    const expectedAction = {
      type: PRESS_DELETE_KEY,
    };
    expect(pressDeleteKey()).toEqual(expectedAction);
  });
  it('should create a PRESS_KEY action', () => {
    const value = 1;
    const expectedAction = {
      type: PRESS_KEY,
      value,
    };
    expect(pressKey(value)).toEqual(expectedAction);
  });
  it('should create a RELEASE_KEY action', () => {
    const id = 0;
    const expectedAction = {
      type: RELEASE_KEY,
      id,
    };
    expect(releaseKey(id)).toEqual(expectedAction);
  });
});
