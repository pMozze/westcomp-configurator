import { FC } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';

import 'rc-slider/assets/index.css';
import styles from './RangeSlider.module.css';

interface Props {
  min: number;
  max: number;
  step: number;
  defaultValue: [min: number, max: number];
  onChange?: (value: [min: number, max: number]) => void;
  className?: string;
}

const RangeSlider: FC<Props> = ({ min, max, step, defaultValue, onChange, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Slider
        className={styles.slider}
        min={min}
        max={max}
        range={{ minCount: min, maxCount: max }}
        step={step}
        defaultValue={defaultValue}
        handleRender={(origin, props) => <div {...origin.props}>{props.value}</div>}
        onChangeComplete={value => onChange && onChange(value as [min: number, max: number])}
        styles={{
          rail: {
            height: '1px',
            top: '50%',
            backgroundColor: 'var(--color-green)'
          },
          handle: {
            top: '50%',
            opacity: '1',

            padding: '2px 4px',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            width: 'fit-content',
            height: '20px',

            fontSize: '10px',
            fontWeight: '400',

            color: 'var(--color-gray)',
            backgroundColor: '#FFF',

            borderRadius: '6px',
            border: '1px solid var(--color-green)',

            boxShadow: 'none',
            translate: '0 -25%'
          },
          track: {
            display: 'none'
          },
          tracks: {
            display: 'none'
          }
        }}
      />
    </div>
  );
};

export default RangeSlider;
