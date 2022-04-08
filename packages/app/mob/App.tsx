import React, { ReactElement, useEffect } from 'react';

import {
  ProvideredRootComponent,
  useActions,
  useAppSelector,
} from '@monorep/redux-module/src';
import { selectPosts } from '@monorep/redux-module/src/store/selectors';
import { Text } from 'react-native';

const App = (): ReactElement => {
  const posts = useAppSelector(selectPosts);

  const { setPosts } = useActions();

  useEffect(() => {
    setPosts();
  }, []);

  return (
    <ProvideredRootComponent platform="mobile">
      <Text>Mobile app</Text>
      <Text>{JSON.stringify(posts)}</Text>
    </ProvideredRootComponent>
  );
};

export default App;
