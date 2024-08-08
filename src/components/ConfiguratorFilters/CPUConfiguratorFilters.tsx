import { FC } from 'react';
import classNames from 'classnames';

import ChevronDownIcon from '@icons/chevron-down.svg?react';
import ChevronUpIcon from '@icons/chevron-up.svg?react';

import ControlLabel from '../ui/ControlLabel/ControlLabel';
import RadioButtonWithText from '../ui/RadioButtonWithText/RadioButtonWithText';
import RangeSlider from '../ui/RangeSlider/RangeSlider';
import ButtonWithIcon from '../ui/ButtonWithIcon/ButtonWithIcon';

import { ICPUConfiguratorFilters } from '@/models';

import styles from './ConfiguratorFilters.module.css';

interface Props {
  filters: ICPUConfiguratorFilters;
  className?: string;
}

const CPUConfiguratorFilters: FC<Props> = ({ className, filters }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <ControlLabel startTitle='Кол-во ядер'>
        <div className={styles.cores}>
          {filters.cores.map((value, valueIndex) => (
            <RadioButtonWithText key={valueIndex} text={value} />
          ))}
        </div>
      </ControlLabel>
      <ControlLabel startTitle='Частота' endTitle='GHz'>
        <RangeSlider
          min={filters.frequency.min}
          max={filters.frequency.max}
          step={filters.frequency.step}
          defaultValue={[filters.frequency.min, filters.frequency.max]}
          onChange={console.log}
        />
      </ControlLabel>
      <ControlLabel startTitle='TDP' endTitle='W'>
        <RangeSlider
          min={filters.tdp.min}
          max={filters.tdp.max}
          step={filters.tdp.step}
          defaultValue={[filters.tdp.min, filters.tdp.max]}
          onChange={console.log}
        />
      </ControlLabel>
      <ButtonWithIcon className={styles.sortByPriceButton} text='Цена' icon={ChevronDownIcon} type='button' />
    </div>
  );
};

export default CPUConfiguratorFilters;
