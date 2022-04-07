import { combineReducers } from 'redux';

import { CombineReducerType } from '../types';

export const getRootReducer = (reducer: any): CombineReducerType =>
  combineReducers({ ...reducer });
