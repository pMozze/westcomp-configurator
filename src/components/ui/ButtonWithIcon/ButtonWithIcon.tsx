import { ComponentProps, ComponentType, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './ButtonWithIcon.module.css';

interface Props extends ComponentProps<'button'> {
  text: string;
  icon: ComponentType<ComponentProps<'svg'>>;
}

const ButtonWithIcon = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { className, text, icon: Icon, ...rest } = props;
  return (
    <button {...rest} ref={ref} className={classNames(styles.wrapper, className)}>
      {text}
      <Icon />
    </button>
  );
});

export default ButtonWithIcon;
