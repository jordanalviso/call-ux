import {
  HIGHLIGHT_KEY,
  RELEASE_KEY,
} from 'call/actions/key';
import {
  HIGHLIGHT_KEY_POOL_SIZE,
  HIGHLIGHT_KEY_MAP,
} from 'call/constants/highlightKeyPool';

const initialState = {
  available: [...Array(HIGHLIGHT_KEY_POOL_SIZE).keys()],
  busy: {},
};

const highlightKeyPool = (state = initialState, action) => {
  switch (action.type) {
    case HIGHLIGHT_KEY:
      if (state.available.length) {
        const nextAvailable = state.available[0];
        const left = HIGHLIGHT_KEY_MAP[action.key].left;
        const top = HIGHLIGHT_KEY_MAP[action.key].top;

        const key = Object.defineProperty({}, nextAvailable, {
          enumerable: true,
          value: {
            key: action.key,
            transform: `translate3d(${left}px, ${top}px, 0)`,
          },
        });
        return {
          ...state,
          available: state.available.slice(1),
          busy: Object.assign({}, state.busy, key),
        };
      }
      return state;

    case RELEASE_KEY:
      const busy = state.busy;
      if (busy[action.id]) {
        delete busy[action.id];
        return {
          available: state.available.concat(action.id),
          busy: Object.assign({}, busy),
        };
      }
      return state;

    default:
      return state;
  }
};

export default highlightKeyPool;
