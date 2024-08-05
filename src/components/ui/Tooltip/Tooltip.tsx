import { FC, ReactNode, useState, useRef } from 'react';
import classNames from 'classnames';

import {
  useFloating,
  autoUpdate,
  offset,
  useHover,
  useFocus,
  useDismiss,
  useInteractions,
  FloatingPortal,
  FloatingArrow,
  arrow
} from '@floating-ui/react';

import ExclamationIcon from '@icons/exclamation.svg?react';
import InformationIcon from '@icons/information.svg?react';

import styles from './Tooltip.module.css';

interface Props {
  variant: 'exclamation' | 'information';
  text?: string;
  children?: ReactNode;
  className?: string;
}

const Tooltip: FC<Props> = ({ variant, text, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'right-start',
    whileElementsMounted: autoUpdate,
    middleware: [arrow({ element: arrowRef, padding: 18 }), offset(12)]
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { move: false }),
    useFocus(context),
    useDismiss(context)
  ]);

  if (text === undefined && children === undefined) {
    return null;
  }

  return (
    <>
      {variant === 'exclamation' && (
        <div ref={refs.setReference} className={classNames(styles.icon, className)} {...getReferenceProps()}>
          <ExclamationIcon />
        </div>
      )}
      {variant === 'information' && (
        <div ref={refs.setReference} className={classNames(styles.icon, className)} {...getReferenceProps()}>
          <InformationIcon />
        </div>
      )}
      {isOpen && (
        <FloatingPortal root={document.getElementById('westcomp-react-configurator')}>
          <div ref={refs.setFloating} style={floatingStyles} className={styles.wrapper} {...getFloatingProps()}>
            {text || children}
            <FloatingArrow ref={arrowRef} context={context} fill='#FFF' stroke='#bac8cf' strokeWidth={1} />
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

export default Tooltip;
