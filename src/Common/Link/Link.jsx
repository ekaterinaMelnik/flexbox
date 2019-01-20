import * as React from 'react';
import * as styles from './Link.module.scss';

const Link = ({ href, text, children }) => (
  <a href={href} className={styles.link}>
    {text}
    {children}
  </a>
);

export default Link;
