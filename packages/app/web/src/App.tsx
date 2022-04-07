import React, { ReactElement, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useActions } from './hooks';
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
