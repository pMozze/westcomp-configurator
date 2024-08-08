import { FC } from 'react';

import Configurator from './components/Configurator/Configurator';
import { IConfigurator } from './models';

import styles from './App.module.css';

const configurators: IConfigurator[] = [
  {
    name: 'processor',
    tooltip:
      'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.',
    filters: {
      cores: [6, 8, 12, 16, 18, 20, 22, 24, 26],
      frequency: {
        min: 2,
        max: 4,
        step: 0.1
      },
      tdp: {
        min: 85,
        max: 130,
        step: 5
      }
    },
    items: [
      {
        name: 'Xeon E5-2620v4 8-core (2.1GHz, Broadwell, 20MB, 85W)',
        tooltip:
          'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.',
        price: 3_300,
        maxAmount: 10,
        cores: 8,
        frequency: 2.1,
        tdp: 85
      },
      {
        name: 'Xeon E5-2623v4 4-core (2.1GHz, Broadwell, 20MB, 85W)',
        tooltip:
          'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.',
        price: 4_200,
        maxAmount: 10,
        cores: 4,
        frequency: 2.1,
        tdp: 85
      },
      {
        name: 'Xeon E5-2637v4 4-core (3.5GHz, Broadwell, 15 МБ, 135W)',
        tooltip:
          'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.',
        price: 5_600,
        maxAmount: 10,
        cores: 4,
        frequency: 3.5,
        tdp: 135
      },
      {
        name: 'Xeon E5-2695v4 18-core (2.1GHz, Broadwell, 45 МБ, 120W)',
        tooltip:
          'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.',
        price: 33_000,
        maxAmount: 10,
        cores: 18,
        frequency: 2.1,
        tdp: 120
      },
      {
        name: 'Xeon E5-2698v4 20-core (2.2GHz, Broadwell, 50 МБ, 135W)',
        tooltip:
          'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.',
        price: 66_000,
        maxAmount: 10,
        cores: 20,
        frequency: 2.2,
        tdp: 135
      },
      {
        name: 'Xeon E5-2699v4 22-core (2.2GHz, Broadwell, 55 МБ, 145W)',
        tooltip:
          'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.',
        price: 79_900,
        maxAmount: 10,
        cores: 22,
        frequency: 2.2,
        tdp: 145
      }
    ],
    maxSelected: 2
  },
  {
    name: 'ram',
    tooltip:
      'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.',
    filters: {
      memoryCapacity: {
        min: 0.5,
        max: 128,
        step: 1
      },
      ddrVersion: [1, 2, 3, 4],
      clockFrequency: {
        min: 1333,
        max: 8200,
        step: 1
      },
      bandwidth: {
        min: 3200,
        max: 25600,
        step: 1
      }
    },
    items: [],
    maxSelected: 24
  },
  {
    name: 'storage-device',
    tooltip:
      'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.',
    filters: {
      type: ['HDD', 'SSD'],
      formFactor: ['2.5"', '3.5"', 'M.2'],
      interface: ['IDE', 'SCSI', 'SATA', 'SAS', 'FC'],
      dataTransferRate: {
        min: 1000,
        max: 25600,
        step: 1000
      }
    },
    items: [],
    maxSelected: 8
  }
];

const App: FC = () => {
  return (
    <div className={styles.wrapper}>
      {configurators.map((configurator, configuratorIndex) => (
        <Configurator key={configuratorIndex} {...configurator} />
      ))}
    </div>
  );
};

export default App;
