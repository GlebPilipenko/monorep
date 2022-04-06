import React, { ReactElement, useEffect } from 'react';

import { createApiInstance } from '@monorep/api-module';
import { Text } from 'react-native';

import { REACT_APP_BASE_URL } from './envConfig';

const App = (): ReactElement => {
  useEffect(() => {
    (async () => {
      const instance = createApiInstance({
        baseURL: REACT_APP_BASE_URL,
      });

      const response = await instance.get('posts');

      console.log(response.data);
    })();
  }, []);

  return <Text>Mobile app</Text>;
};

export default App;
