import { ComponentProps, forwardRef, useId } from 'react';
import classNames from 'classnames';

import CheckIcon from '@icons/check.svg?react';
import styles from './Checkbox.module.css';

const Checkbox = forwardRef<HTMLInputElement, ComponentProps<'input'>>((props, ref) => {
  const { className, ...rest } = props;
  const id = useId();

  return (
    <label className={classNames(styles.wrapper, className)} htmlFor={id}>
      <input {...rest} ref={ref} id={id} className={styles.control} type='checkbox' />
      <CheckIcon className={styles.icon} />
    </label>
  );
});

export default Checkbox;
