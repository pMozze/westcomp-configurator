import { FC, useState } from 'react';
import classNames from 'classnames';

import RadioButton from '@/components/ui/RadioButton/RadioButton';
import Tooltip from '@/components/ui/Tooltip/Tooltip';
import NumberInput from '@/components/ui/NumberInput/NumberInput';

import { formatPrice } from '@/utils/formatPrice';
import { IConfiguratorItem } from '@/models';

import styles from './ConfiguratorItem.module.css';

interface Props extends IConfiguratorItem {
  groupName?: string;
  className?: string;
}

const ConfiguratorItem: FC<Props> = ({ groupName, name, price, tooltip, selected, className }) => {
  const [totalPrice, setTotalPrice] = useState(price);

  return (
    <div className={classNames(styles.wrapper, selected && styles.selected, className)}>
      <RadioButton name={groupName} defaultChecked={selected} />
      <div className={styles.name}>{name}</div>
      <Tooltip className={styles.tooltip} text={tooltip} variant='information' />
      {selected && (
        <NumberInput
          className={styles.numberInput}
          defaultValue={1}
          min={1}
          onChange={value => setTotalPrice(value * price)}
        />
      )}
      <div className={styles.price}>{formatPrice(totalPrice)}</div>
    </div>
  );
};

export default ConfiguratorItem;
