import storage from 'redux-persist/lib/storage';

import { createGlobalStore, getRootReducer } from '../utils';

import { postsReducer } from './reducers';

const reducer = {
  posts: postsReducer,
};

export const webStore = createGlobalStore(storage, getRootReducer(reducer));
