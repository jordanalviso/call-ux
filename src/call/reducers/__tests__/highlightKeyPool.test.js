import {
  HIGHLIGHT_KEY,
  RELEASE_KEY,
} from 'call/actions/key';
import reducer from 'call/reducers/highlightKeyPool';

describe('Reducer: highlightKeyPool', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      available: [0, 1, 2, 3, 4, 5],
      busy: {},
    });
  });
  it('should handle HIGHLIGHT_KEY', () => {
    const state = {
      available: [0, 1, 2, 3, 4, 5],
      busy: {},
    };
    const key = 1;
    const action = {
      type: HIGHLIGHT_KEY,
      key,
    };
    expect(reducer(state, action)).toEqual({
      available: [1, 2, 3, 4, 5],
      busy: {
        0: {
          key: 1,
          transform: 'translate3d(15px, 0px, 0)',
        },
      },
    });
  });
  it('should skip HIGHLIGHT_KEY action when available queue is empty', () => {
    const state = {
      available: [],
      busy: {},
    };
    const key = 1;
    const action = {
      type: HIGHLIGHT_KEY,
      key,
    };
    expect(reducer(state, action)).toEqual({
      available: [],
      busy: {},
    });
  });
  it('should handle RELEASE_KEY', () => {
    const state = {
      available: [1, 2, 3, 4, 5],
      busy: {
        0: {
          key: 1,
          transform: 'translate3d(15px, 0px, 0)',
        },
      },
    };
    const id = 0;
    const action = {
      type: RELEASE_KEY,
      id,
    };
    expect(reducer(state, action)).toEqual({
      available: [1, 2, 3, 4, 5, 0],
      busy: {},
    });
  });
});
