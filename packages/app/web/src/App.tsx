import { FC, ReactElement, useEffect } from 'react';

import { useActions, useAppSelector } from '@monorep/redux-module/src';
import { selectPosts } from '@monorep/redux-module/src/store/selectors';

const MINIMAL_POSTS_LENGTH = 0;

const App: FC = (): ReactElement => {
  const posts = useAppSelector(selectPosts);

  const { setPosts } = useActions();

  useEffect(() => {
    setPosts();
  }, []);

  return (
    <ul>
      {posts.length > MINIMAL_POSTS_LENGTH &&
        posts.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
  );
};

export default App;
