export const HIGHLIGHT_KEY = 'HIGHLIGHT_KEY';
export const PRESS_CALL_KEY = 'PRESS_CALL_KEY';
export const PRESS_DELETE_KEY = 'PRESS_DELETE_KEY';
export const PRESS_KEY = 'PRESS_KEY';
export const RELEASE_KEY = 'RELEASE_KEY';

export const highlightKey = (key) => {
  return {
    type: HIGHLIGHT_KEY,
    key,
  };
};

export const pressCallKey = () => {
  return {
    type: PRESS_CALL_KEY,
  };
};

export const pressDeleteKey = () => {
  return {
    type: PRESS_DELETE_KEY,
  };
};

export const pressKey = (value) => {
  return {
    type: PRESS_KEY,
    value,
  };
};

export const releaseKey = (id) => {
  return {
    type: RELEASE_KEY,
    id,
  };
};
