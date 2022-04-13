import React from 'react';

import { createGlobalStore, ProvideredRootComponent } from '@monorep/redux-module/src';
import ReactDOM from 'react-dom';
import storage from 'redux-persist/lib/storage';

import App from './App';
import reportWebVitals from './reportWebVitals';

const { store } = createGlobalStore(storage);

ReactDOM.render(
  <ProvideredRootComponent store={store}>
    <App />
  </ProvideredRootComponent>,
  document.getElementById('root'),
);

reportWebVitals();
