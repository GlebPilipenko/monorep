import React, { ReactElement, useEffect } from 'react';

import { createApiInstance } from '@monorep/api-module';

import './App.css';

const App = (): ReactElement => {
  useEffect(() => {
    (async () => {
      const instance = createApiInstance({
        baseURL: process.env.REACT_APP_BASE_URL,
      });
      const response = await instance.get('posts');

      console.log(response.data);
    })();
  }, []);

  return <h1>Web app</h1>;
};

export default App;
