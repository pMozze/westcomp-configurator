import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './ControlLabel.module.css';

interface Props {
  startTitle?: string;
  endTitle?: string;
  className?: string;
  children: ReactNode;
}

const ControlLabel: FC<Props> = ({ startTitle, endTitle, className, children }) => {
  if (!startTitle && !endTitle) {
    return null;
  }

  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.startTitle}>{startTitle}</div>
      <div className={styles.content}>{children}</div>
      <div className={styles.startTitle}>{endTitle}</div>
    </div>
  );
};

export default ControlLabel;
