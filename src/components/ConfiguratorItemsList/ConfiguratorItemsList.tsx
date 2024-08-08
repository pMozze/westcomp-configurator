import { FC, useState } from 'react';
import classNames from 'classnames';

import ExpandIcon from '@icons/expand.svg?react';
import ChevronUpIcon from '@icons/chevron-up.svg?react';

import ConfiguratorItem from '../ConfiguratorItem/ConfiguratorItem';
import { IConfiguratorItem } from '@/models';

import styles from './ConfiguratorItemsList.module.css';

interface Props {
  items: IConfiguratorItem[];
  name?: string;
  limit?: number;
  className?: string;
}

const ConfiguratorItemsList: FC<Props> = ({ items, name, limit = 5, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={classNames(styles.wrapper, className)}>
      {items.length <= limit ? (
        items.map((item, itemIndex) => (
          <ConfiguratorItem key={itemIndex} {...item} className={styles.configuratorItem} groupName={name} />
        ))
      ) : (
        <>
          {items.slice(0, limit).map((item, itemIndex) => (
            <ConfiguratorItem key={itemIndex} {...item} className={styles.configuratorItem} groupName={name} />
          ))}
          <button className={styles.button} type='button' disabled={isExpanded} onClick={() => setIsExpanded(true)}>
            <ExpandIcon className={styles.buttonIcon} />
            <div className={styles.buttonText}>Показать все</div>
            <div className={styles.buttonDots}>...</div>
          </button>
          {isExpanded && (
            <>
              {items.slice(limit).map((item, itemIndex) => (
                <ConfiguratorItem key={itemIndex} {...item} className={styles.configuratorItem} groupName={name} />
              ))}
              <button className={styles.button} type='button' onClick={() => setIsExpanded(false)}>
                <ChevronUpIcon className={styles.buttonIcon} />
                <div className={styles.buttonText}>Свернуть</div>
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ConfiguratorItemsList;
