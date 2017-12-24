import { PRESS_CALL_KEY } from 'call/actions/key';

const calling = (state = false, action) => {
  switch (action.type) {
    case PRESS_CALL_KEY:
      return !state;

    default:
      return state;
  }
};

export default calling;
