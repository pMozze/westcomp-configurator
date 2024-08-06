import { FC } from 'react';

import Configurator from './components/Configurator/Configurator';

import styles from './App.module.css';

const App: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Configurator />
    </div>
  );
};

export default App;
