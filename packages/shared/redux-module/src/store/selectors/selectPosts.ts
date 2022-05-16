import { RootStateType } from '../../utils/createGlobalStore';

export const selectPosts = (state: RootStateType): any[] => state.postsList.posts;
