import { FC } from 'react';
import ConfiguratorItemsList from '../ConfiguratorItemsList/ConfiguratorItemsList';
import styles from './Configurator.module.css';

const Configurator: FC = () => {
  return (
    <div className={styles.wrapper}>
      <ConfiguratorItemsList
        name='processor'
        limit={3}
        items={[
          {
            name: 'Xeon E5-2620v4 8-core (2.1GHz, Broadwell, 20MB, 85W)',
            price: 3_300,
            tooltip:
              'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.'
          },
          {
            name: 'Xeon E5-2623v4 4-core (2.1GHz, Broadwell, 20MB, 85W)',
            price: 4_200,
            tooltip:
              'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.'
          },
          {
            name: 'Xeon E5-2637v4   4-core (3.5GHz, Broadwell, 15 МБ, 135W)',
            price: 5_600,
            tooltip:
              'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.'
          },
          {
            name: 'Xeon E5-2695v4 18-core (2.1GHz, Broadwell, 45 МБ, 120W)',
            price: 33_000,
            tooltip:
              'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.'
          },
          {
            name: 'Xeon E5-2698v4 20-core (2.2GHz, Broadwell, 50 МБ, 135W)',
            price: 66_000,
            tooltip:
              'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.'
          },
          {
            name: 'Xeon E5-2699v4 22-core (2.2GHz, Broadwell, 55 МБ, 145W)',
            price: 79_900,
            tooltip:
              'Волновая тень, как того требуют законы термодинамики, поглощает поток, хотя этот факт нуждается в дальнейшей тщательной проверке.'
          }
        ]}
      />
    </div>
  );
};

export default Configurator;
