import { RootStateType } from '../../utils/createGlobalStore';

export const selectPosts = (state: RootStateType): string[] => state.postsList.posts;
