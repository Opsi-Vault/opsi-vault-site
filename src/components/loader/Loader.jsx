import React from 'react';
import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.spinner}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loader;
