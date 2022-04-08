import { ACTIONS, customBindActionCreators } from '@monorep/redux-module/src';
import { useDispatch } from 'react-redux';

const ALL_ACTIONS = { ...ACTIONS };

export const useActions = (): any => {
  const dispatch = useDispatch();

  return customBindActionCreators(ALL_ACTIONS, dispatch);
};
