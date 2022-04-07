import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterType = {
  posts: string[];
};

const initialState = {
  posts: [],
};

const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state: CounterType, action: PayloadAction<string[]>): void => {
      state.posts = [...state.posts, ...action.payload];
    },
  },
});

export const { setPosts } = postsReducer.actions;

export default postsReducer.reducer;
