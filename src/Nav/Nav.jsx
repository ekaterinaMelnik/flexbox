import * as React from 'react';
import * as styles from './Nav.module.scss';
import * as classNames from 'classnames/bind';
import Link from '../Common/Link/Link';

const cx = classNames.bind(styles);

class Nav extends React.Component {
  state = {
    isOpen: false
  };

  toggleMenu = () => {
    this.setState((state => ({
      isOpen: !state.isOpen
    })));
  };

  render() {
    const { isOpen } = this.state;

    const flexNavState = cx('flexNavUl', {
      flexNavUlOpen: isOpen,
      flexNavUlClose: !isOpen
    });

    return (
      <nav className={styles.flexNav}>
        <div className={styles.toggleNav} onClick={this.toggleMenu}>
          <Link href='#' text={'Menu'}/>
        </div>
        <ul className={flexNavState}>
          <li><Link href='#' text={'Item 1'}/></li>
          <li><Link href='#' text={'Item 2'}/></li>
          <li><Link href='#' text={'Item 3'}/></li>
          <li><Link href='#' text={'Item 4'}/></li>
          <li><Link href='#' text={'Item 5'}/></li>
          <li><Link href='#' text={'Item 6'}/></li>
          <li className={styles.social}>
            <Link href="#"><i className="fa fa-twitter"/></Link>
          </li>
          <li className={styles.social}>
            <Link href="#"><i className="fa fa-facebook"/></Link>
          </li>
          <li className={styles.social}>
            <Link href="#"><i className="fa fa-instagram"/></Link>
          </li>
          <li className={styles.social}>
            <Link href="#"><i className="fa fa-github"/></Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
