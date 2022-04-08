import AsyncStorage from '@react-native-community/async-storage';

import { createGlobalStore, getRootReducer } from '../utils';

import { postsReducer } from './reducers';

const state = {
  posts: postsReducer,
};

export type MobileStateType = typeof state;

export const mobileStore = createGlobalStore(
  AsyncStorage,
  getRootReducer(state as MobileStateType),
);
