import React, { Component } from 'react';
import * as styles from './App.module.scss';
import Info from './Info/Info';

class App extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.block1}>
            Flexbox призван спасти нас от неприятных моментов чистого CSS (например, от вертикального выравнивания), и
            он отлично справляется со своей задачей. Но разобраться в принципах его работы порой бывает сложно,
            особенно, если вы новичок.
          </div>
          <div className={styles.block2}>
            У нас есть 4 разноцветных div’а разных размеров, которые находятся внутри серого div’а. У каждого div’а есть
            свойство display: block. Поэтому каждый квадрат занимает всю ширину строки.
          </div>
          <div className={styles.block3}>
            Flexbox призван спасти нас
          </div>
        </div>
        <div className={styles.tabContainer}>
          <div className={styles.header}>
            Header
          </div>
          <div className={styles.subheader}>
            Subheader
          </div>
          <div className={styles.info}>
            Info
          </div>
        </div>
        <Info />
      </>
    );
  }
}

export default App;
