import { AsyncStorageStatic } from '@react-native-community/async-storage';
import { createStore, Store } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { Persistor, WebStorage } from 'redux-persist/es/types';
import createSagaMiddleware from 'redux-saga';

import { rootWatcher } from '../store/sagas/root';
import { CombineReducerType } from '../types';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const createGlobalStore = (
  persistStorage: WebStorage | AsyncStorageStatic,
  rootReducer: CombineReducerType,
): any => {
  const sagaMiddleware = createSagaMiddleware();
  const persistConfig = { key: 'root', storage: persistStorage };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store: Store<ReturnType<typeof persistedReducer>> = {
    ...createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware))),
  };

  sagaMiddleware.run(rootWatcher);

  const persistor: Persistor = persistStore(store);

  return { store, persistor };
};
