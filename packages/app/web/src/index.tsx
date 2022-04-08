import React from 'react';

import { ProvideredRootComponent } from '@monorep/redux-module/src';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ProvideredRootComponent platform="web">
    <App />
  </ProvideredRootComponent>,
  document.getElementById('root'),
);

reportWebVitals();
