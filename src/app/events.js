import { dispatch } from 'app/store';
import { appReady } from 'app/actions/appReady';

export function onLoad() {
  dispatch(appReady(true));
}
