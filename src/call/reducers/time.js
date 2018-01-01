import {
  RESET_TIMER,
  START_TIMER,
  TICK_TIMER,
} from 'call/actions/time';

const initialState = {
  counter: 0,
  timer: null,
};

const callKey = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        timer: action.timer,
      };

    case RESET_TIMER:
      clearInterval(state.timer);
      return {
        counter: 0,
        timer: null,
      };

    case TICK_TIMER:
      return {
        ...state,
        counter: state.counter + 1,
      };

    default:
      return state;
  }
};

export default callKey;
