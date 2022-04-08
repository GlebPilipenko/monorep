import { RootStateType } from '../types';

export const selectPosts = (state: RootStateType): string[] => state.posts;
