import React, { ReactElement, useEffect } from 'react';

import { useActions } from '@monorep/redux-module/src';
import { useSelector } from 'react-redux';

import { selectPosts } from './selectors';

const App = (): ReactElement => {
  const posts = useSelector(selectPosts);

  const { setPosts } = useActions();

  useEffect(() => {
    setPosts();
  }, []);

  console.log(posts);

  return <h1>Web app</h1>;
};

export default App;
