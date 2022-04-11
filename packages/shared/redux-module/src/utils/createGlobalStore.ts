import { AsyncStorageStatic } from '@react-native-community/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import { WebStorage } from 'redux-persist/es/types';
import createSagaMiddleware from 'redux-saga';

import { postsReducer } from '../store/reducers/postsReducer';
import { rootWatcher } from '../store/sagas/root';

export const rootReducer = combineReducers({ postsList: postsReducer.reducer });

export type RootStateType = ReturnType<typeof rootReducer>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createGlobalStore = (persistStorage: AsyncStorageStatic | WebStorage) => {
  const sagaMiddleware = createSagaMiddleware();
  const persistConfig = { key: 'root', storage: persistStorage };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootWatcher);

  const persistor = persistStore(store);

  return { store, persistor };
};
