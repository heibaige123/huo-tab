import React from 'react';
import styles from './index.module.css';

export function Header(): React.JSX.Element {
  return (
    <div className={styles['new-tab-header']}>
      <h2>Header</h2>
    </div>
  );
}
