import { all } from 'redux-saga/effects';

import mobileRootSaga from './mobileRootSaga';
import webRootSaga from './webRootSaga';

export default function* rootWatcher(): Generator {
  yield all([mobileRootSaga(), webRootSaga()]);
}
