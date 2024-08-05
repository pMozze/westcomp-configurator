import { ComponentProps, forwardRef, useId } from 'react';
import classNames from 'classnames';
import styles from './RadioButton.module.css';

const RadioButton = forwardRef<HTMLInputElement, ComponentProps<'input'>>((props, ref) => {
  const { className, ...rest } = props;
  const id = useId();

  return (
    <label className={classNames(styles.wrapper, className)} htmlFor={id}>
      <input {...rest} ref={ref} id={id} className={styles.control} type='radio' />
    </label>
  );
});

export default RadioButton;
