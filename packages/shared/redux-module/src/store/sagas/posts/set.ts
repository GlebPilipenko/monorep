import { call, put } from 'redux-saga/effects';

import { setPosts } from '../../reducers';

export default function* SetPostsSagaWorker(): Generator {
  try {
    const response = yield call(() => ['1', '2', '3']);

    if (Array.isArray(response)) {
      yield put(setPosts(response));
    }
  } catch (err) {
    console.log(err);
  }
}
