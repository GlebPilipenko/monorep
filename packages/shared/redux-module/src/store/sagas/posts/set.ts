import { Api } from '@monorep/api-module/src';
import { call, put } from 'redux-saga/effects';

import { setPosts } from '../../reducers';

export default function* SetPostsSagaWorker(): Generator {
  try {
    const response = yield call(Api.getPosts);

    // @ts-ignore
    yield put(setPosts(response.data));
  } catch (err) {
    console.log(err);
  }
}
