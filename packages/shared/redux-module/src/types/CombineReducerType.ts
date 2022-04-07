import { CombinedState, Reducer } from 'redux';

export type CombineReducerType = Reducer<CombinedState<{ [x: string]: unknown }>, never>;
