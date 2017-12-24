import { APP_READY } from 'app/actions/appReady';

const appReady = (state = false, action) => {
  switch (action.type) {
    case APP_READY:
      return action.ready;

    default:
      return state;
  }
};

export default appReady;
