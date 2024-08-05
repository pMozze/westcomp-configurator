import { FC } from 'react';

import Checkbox from './components/ui/Checkbox/Checkbox';
import RadioButton from './components/ui/RadioButton/RadioButton';
import RadioButtonWithText from './components/ui/RadioButtonWithText/RadioButtonWithText';
import NumberInput from './components/ui/NumberInput/NumberInput';
import ButtonWithIcon from './components/ui/ButtonWithIcon/ButtonWithIcon';
import TestIcon from '@icons/check.svg?react';
import Tooltip from './components/ui/Tooltip/Tooltip';

const App: FC = () => {
  return (
    <div>
      <Checkbox defaultChecked />
      <RadioButton defaultChecked name='radio-button' />
      <RadioButtonWithText text='SSSS' name='radio-button' />
      <NumberInput defaultValue={1} min={1} max={10} />
      <ButtonWithIcon text='Сбросить фильтр' icon={TestIcon} />
      <Tooltip
        text='Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.'
        variant='exclamation'
      />
      <Tooltip
        text='Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.'
        variant='information'
      />
    </div>
  );
};

export default App;
