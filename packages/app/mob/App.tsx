import React, { ReactElement, useEffect } from 'react';

import {
  ProvideredRootComponent,
  useActions,
  useAppSelector,
} from '@monorep/redux-module/src';
import { selectPosts } from '@monorep/redux-module/src/store/selectors';
import { Text } from 'react-native';

const Main = (): ReactElement | null => {
  const posts = useAppSelector(selectPosts);

  const { setPosts } = useActions();

  useEffect(() => {
    setPosts();
  }, []);

  return (
    <>
      <Text>Mobile app</Text>
      <Text>{JSON.stringify(posts)}</Text>
    </>
  );
};

const App = (): ReactElement => (
  <ProvideredRootComponent platform="mobile">
    <Main />
  </ProvideredRootComponent>
);

export default App;
