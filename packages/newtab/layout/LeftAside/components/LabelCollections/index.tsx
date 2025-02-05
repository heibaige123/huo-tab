import { MenuItem } from '../MenuItem';
import * as React from 'react';
import { useNewTabStore } from '@store/index';
import styles from './styles.module.css';

export function LabelCollections(): React.JSX.Element {
  const labelCollections = useNewTabStore((state) => state.labelCollections);
  const [selectIndex, setSelectIndex] = React.useState(0);

  return (
    <div className={styles['left-container']}>
      {labelCollections.map((item, index) => (
        <div className={styles['menu-item']} key={index}>
          <div
            className={[
              selectIndex === index ? 'bg-gray-400' : '',
              styles['menu-item-icon'],
            ].join(' ')}
          >
            <MenuItem
              key={index}
              icon={item.icon}
              onClick={() => setSelectIndex(index)}
            />
          </div>

          <div className={styles['menu-item-txt']}>
            <div>{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
