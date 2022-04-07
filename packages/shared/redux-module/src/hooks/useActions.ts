import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { ACTIONS } from '../store/actions';

const ALL_ACTIONS = { ...ACTIONS };

type AllActionsType = typeof ALL_ACTIONS;

export const useActions = (): AllActionsType => {
  const dispatch = useDispatch();

  return bindActionCreators(ALL_ACTIONS, dispatch);
};
