import AsyncStorage from '@react-native-community/async-storage';

import { createGlobalStore, getRootReducer } from '../utils';

import { postsReducer } from './reducers';

const reducer = {
  posts: postsReducer,
};

export const mobileStore = createGlobalStore(AsyncStorage, getRootReducer({ reducer }));
