import storage from 'redux-persist/lib/storage';

import { createGlobalStore, getRootReducer } from '../utils';

import { postsReducer } from './reducers';

const state = {
  posts: postsReducer,
};

export type WebStateType = typeof state;

export const webStore = createGlobalStore(storage, getRootReducer(state as WebStateType));
