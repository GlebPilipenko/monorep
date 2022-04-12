import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage';

import { createGlobalStore } from './createGlobalStore';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getStores = () => {
  const { store: webVersionStore } = createGlobalStore(storage);
  const { store: mobVersionStore } = createGlobalStore(AsyncStorage);

  return { webVersionStore, mobVersionStore };
};
