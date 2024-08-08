import { FC } from 'react';
import { IConfigurator } from '@/models';

import CPUConfigurator from './CPUConfigurator';

const Configurator: FC<IConfigurator> = props => {
  if (props.name === 'processor') {
    return <CPUConfigurator {...props} />;
  }

  return null;
};

export default Configurator;
