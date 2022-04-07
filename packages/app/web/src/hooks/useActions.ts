import { ACTIONS, customBindActionCreators } from '@monorep/redux-module/src';
import { useDispatch } from 'react-redux';

const ALL_ACTIONS = { ...ACTIONS };

type AllActionsType = typeof ALL_ACTIONS;

export const useActions = (): AllActionsType => {
  const dispatch = useDispatch();

  return customBindActionCreators(ALL_ACTIONS, dispatch);
};
