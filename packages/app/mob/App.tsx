import React, { ReactElement, useEffect, useState } from 'react';

import { createApiInstance } from '@monorep/api-module';
import { Text } from 'react-native';

const App = (): ReactElement => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const instance = createApiInstance({
        baseURL: 'https://jsonplaceholder.typicode.com/',
      });

      const response = await instance.get('posts');

      setData([...response.data]);
    })();
  }, []);

  return <Text>{JSON.stringify(data)}</Text>;
};

export default App;
