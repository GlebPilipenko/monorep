import { useDispatch } from 'react-redux';

import { ACTIONS } from '../store/actions';
import { customBindActionCreators } from '../utils';

const ALL_ACTIONS = { ...ACTIONS };

type AllActionsType = typeof ALL_ACTIONS;

export const useActions = (): AllActionsType => {
  const dispatch = useDispatch();

  return customBindActionCreators(ALL_ACTIONS, dispatch);
};
