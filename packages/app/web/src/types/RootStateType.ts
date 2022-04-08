import { webStore } from '@monorep/redux-module/src';

const { store } = webStore;

export type RootStateType = ReturnType<typeof store>;
