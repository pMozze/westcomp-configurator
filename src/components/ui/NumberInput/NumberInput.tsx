import { FC, useState } from 'react';
import classNames from 'classnames';

import PlusIcon from '@icons/plus.svg?react';
import MinusIcon from '@icons/minus.svg?react';

import styles from './NumberInput.module.css';

interface Props {
  defaultValue?: number;
  min?: number;
  max?: number;
  className?: string;
}

const NumberInput: FC<Props> = ({ defaultValue = 0, min = -Infinity, max = Infinity, className }) => {
  const [value, setValue] = useState(defaultValue);

  const plus = () => {
    if (value + 1 <= max) {
      setValue(value + 1);
    }
  };

  const minus = () => {
    if (value - 1 >= min) {
      setValue(value - 1);
    }
  };

  return (
    <div className={classNames(styles.wrapper, className)}>
      <button className={styles.button} type='button' onClick={plus}>
        <PlusIcon />
      </button>
      <div className={styles.value}>{value}</div>
      <button className={styles.button} type='button' onClick={minus}>
        <MinusIcon />
      </button>
    </div>
  );
};

export default NumberInput;
