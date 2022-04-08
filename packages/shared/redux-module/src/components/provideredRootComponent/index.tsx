import { Provider } from 'react-redux';

import { getStores } from '../../utils';

type PropsType = {
  platform: string;
  children: any;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ProvideredRootComponent = ({ platform, children }: PropsType) => {
  const { webVersionStore, mobVersionStore } = getStores();
  const validStore = platform === 'web' ? webVersionStore : mobVersionStore;

  return <Provider store={validStore}>{children}</Provider>;
};
