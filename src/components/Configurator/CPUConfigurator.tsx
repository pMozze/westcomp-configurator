import { FC } from 'react';
import { IConfigurator } from '@/models';

import ConfiguratorHeader from '../ConfiguratorHeader/ConfiguratorHeader';
import ConfiguratorItemsList from '../ConfiguratorItemsList/ConfiguratorItemsList';
import ConfiguratorFilters from '../ConfiguratorFilters/ConfiguratorFilters';

import CPUIcon from '@icons/cpu.svg?react';
import styles from './Configurator.module.css';

const CPUConfigurator: FC<IConfigurator> = ({ name, tooltip, maxSelected, filters, items }) => {
  return (
    <div>
      <ConfiguratorHeader
        icon={CPUIcon}
        titleTooltip={tooltip}
        title='ПРОЦЕССОРЫ (CPU)'
        limit={{ current: '1', max: maxSelected }}
      />
      <ConfiguratorFilters className={styles.configuratorFilters} configuratorName={name} filters={filters} />
      <ConfiguratorItemsList className={styles.configuratorItemsList} name='processor' limit={3} items={items} />
    </div>
  );
};

export default CPUConfigurator;
