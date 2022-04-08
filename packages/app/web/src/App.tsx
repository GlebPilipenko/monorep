import { FC, ReactElement, useEffect } from 'react';

import { useActions, useAppSelector } from '@monorep/redux-module/src';
import { selectPosts } from '@monorep/redux-module/src/store/selectors';

const App: FC = (): ReactElement => {
  const posts = useAppSelector(selectPosts);

  const { setPosts } = useActions();

  useEffect(() => {
    setPosts();
  }, []);

  console.log(posts);

  return <h1>Web app</h1>;
};

export default App;
