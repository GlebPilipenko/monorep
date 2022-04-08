import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';

export type CounterType = {
  posts: string[];
};

const initialState = {
  posts: [],
};

export const postsReducer = createSlice<
  CounterType,
  SliceCaseReducers<CounterType>,
  string
>({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state: CounterType, action: PayloadAction<string[]>): void => {
      state.posts = [...action.payload];
    },
  },
});

export const { setPosts } = postsReducer.actions;
