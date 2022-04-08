import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';

import { ACTIONS } from '../store/actions';

export const customBindActionCreators = (
  allActions: typeof ACTIONS,
  dispatch: Dispatch,
): typeof ACTIONS => bindActionCreators(allActions, dispatch);
