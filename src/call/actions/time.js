export const RESET_TIMER = 'RESET_TIMER';
export const START_TIMER = 'START_TIMER';
export const TICK_TIMER = 'TICK_TIMER';

export const resetTimer = () => {
  return {
    type: RESET_TIMER,
  };
};

export const startTimer = (timer) => {
  return {
    type: START_TIMER,
    timer,
  };
};

export const tickTimer = () => {
  return {
    type: TICK_TIMER,
  };
};
