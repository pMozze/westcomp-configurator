import { FC, ComponentType, ComponentProps, ReactNode } from 'react';

import Tooltip from '../ui/Tooltip/Tooltip';
import ButtonWithIcon from '../ui/ButtonWithIcon/ButtonWithIcon';
import CrossIcon from '@icons/cross.svg?react';

import styles from './ConfiguratorHeader.module.css';

interface Props {
  icon: ComponentType<ComponentProps<'svg'>>;
  title: string;
  titleTooltip?: string | ReactNode;
  limit: {
    current: string;
    max: number;
  };
}

const ConfiguratorHeader: FC<Props> = ({ icon: Icon, title, titleTooltip, limit }) => {
  return (
    <div className={styles.wrapper}>
      <Icon className={styles.icon} />
      <div className={styles.title}>
        {title}
        {titleTooltip && (
          <Tooltip className={styles.titleTooltip} variant='exclamation'>
            {titleTooltip}
          </Tooltip>
        )}
      </div>
      <div className={styles.limitText}>
        Количество процессоров: <b>{limit.current}</b> из {limit.max} возможных.
      </div>
      <ButtonWithIcon className={styles.resetFiltersButton} text='сбросить фильтр' icon={CrossIcon} type='button' />
    </div>
  );
};

export default ConfiguratorHeader;
