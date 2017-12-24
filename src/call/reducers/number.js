import {
  PRESS_DELETE_KEY,
  PRESS_KEY,
} from 'call/actions/key';
import { CLEAR_NUMBER } from 'call/actions/number';

const number = (state = '', action) => {
  switch (action.type) {
    case CLEAR_NUMBER:
      return '';

    case PRESS_DELETE_KEY:
      if (state.length === 5 || state.length === 9) {
        return state.slice(0, -2);
      }
      if (state.length > 0) {
        return state.slice(0, -1);
      }
      return state;

    case PRESS_KEY:
      if (state.length === 3 || state.length === 7) {
        return `${state}-${action.value}`;
      }
      return state + action.value;

    default:
      return state;
  }
};

export default number;
