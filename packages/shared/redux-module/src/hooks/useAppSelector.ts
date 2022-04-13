import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootStateType } from '../utils/createGlobalStore';

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
