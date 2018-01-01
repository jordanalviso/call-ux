import {
  APP_READY,
  appReady,
} from 'app/actions/appReady';

describe('Action: appReady', () => {
  it('should create an appReady action', () => {
    const ready = true;
    const expectedAction = {
      type: APP_READY,
      ready,
    };
    expect(appReady(ready)).toEqual(expectedAction);
  });
});
