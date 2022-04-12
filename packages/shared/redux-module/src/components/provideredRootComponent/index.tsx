// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import { Provider } from 'react-redux';

type PropsType = {
  store: any;
  children: any;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ProvideredRootComponent = ({ store, children }: PropsType) => (
  <Provider store={store}>{children}</Provider>
);
