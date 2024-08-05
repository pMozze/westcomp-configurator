import { ComponentProps, forwardRef, useEffect, useId, useRef } from 'react';
import classNames from 'classnames';
import styles from './RadioButtonWithText.module.css';

interface Props extends ComponentProps<'input'> {
  text: string | number;
}

const RadioButtonWithText = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, text, ...rest } = props;

  const wrapperRef = useRef<HTMLLabelElement>(null);
  const id = useId();

  useEffect(() => {
    const wrapper = wrapperRef.current!;
    wrapper.style.borderRadius = parseInt(getComputedStyle(wrapper).width) <= 20 ? '100%' : '6px';
  }, [text]);

  return (
    <label ref={wrapperRef} className={classNames(styles.wrapper, className)} htmlFor={id}>
      <input {...rest} ref={ref} id={id} className={styles.control} type='radio' />
      {text}
    </label>
  );
});

export default RadioButtonWithText;
