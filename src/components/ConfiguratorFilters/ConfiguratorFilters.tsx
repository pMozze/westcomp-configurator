import { FC } from 'react';
import { IConfigurator } from '@/models';

import CPUConfiguratorFilters from './CPUConfiguratorFilters';
import { ICPUConfiguratorFilters } from '@/models';

interface Props {
  configuratorName: IConfigurator['name'];
  filters: IConfigurator['filters'];
  className?: string;
}

const ConfiguratorFilters: FC<Props> = ({ configuratorName, filters, className }) => {
  if (configuratorName === 'processor') {
    return <CPUConfiguratorFilters className={className} filters={filters as ICPUConfiguratorFilters} />;
  }

  return null;
};

export default ConfiguratorFilters;
