import { takeLatest } from 'redux-saga/effects';

import { SagaActionType } from '../../../enums';
import { SetPostsSagaWorker } from '../posts';

export default function* rootWatcher(): Generator {
  yield takeLatest(SagaActionType.SetPosts, SetPostsSagaWorker);
}
