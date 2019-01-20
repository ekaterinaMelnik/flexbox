import React from 'react';
import Header from './Loyaut/Header/Header';
import Nav from './Nav/Nav';
import * as styles from './App.module.scss';

const App = () => (
  <div className={styles.wrapper}>
    <Header />
    <Nav />
  </div>
);

export default App;
