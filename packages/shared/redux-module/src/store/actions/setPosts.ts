import { SagaActionType } from '../../enums';

export const setPosts = (): { type: SagaActionType } => ({
  type: SagaActionType.SetPosts,
});
