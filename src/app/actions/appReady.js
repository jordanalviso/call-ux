export const APP_READY = 'APP_READY';

export const appReady = (ready) => {
  return {
    type: APP_READY,
    ready,
  };
};
