import * as React from 'react';
import * as styles from './Nav.module.scss';

const Nav = () => (
  <div className={styles.wrapper}>
    <nav className={styles.flexNav}>
      <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
        <li><a href="#">Item 5</a></li>
        <li><a href="#">Item 6</a></li>
        <li className={styles.social}>
          <a href="#"><i className="fa fa-twitter"/></a>
        </li>
        <li className={styles.social}>
          <a href="#"><i className="fa fa-facebook"/></a>
        </li>
        <li className={styles.social}>
          <a href="#"><i className="fa fa-instagram"/></a>
        </li>
        <li className={styles.social}>
          <a href="#"><i className="fa fa-github"/></a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
