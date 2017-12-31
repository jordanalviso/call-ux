import { APP_READY } from 'app/actions/appReady';
import reducer from 'app/reducers/appReady';

describe('Reducer: appReady', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(false);
  });
  it('should handle APP_READY', () => {
    const ready = true;
    const action = {
      type: APP_READY,
      ready,
    };
    expect(reducer(false, action)).toEqual(true);
  });
});
