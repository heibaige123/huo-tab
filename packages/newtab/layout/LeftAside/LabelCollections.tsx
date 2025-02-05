import * as React from 'react';
import styles from './styles.module.css';
import { useNewTabStore } from '@store/index';
import { LabelConnectionIcon } from './LabelConnectionIcon';
import { LabelCollectionItemType } from '@store/types';

function Icon(prop: LabelCollectionItemType) {
  const selectedId = useNewTabStore((state) => state.selectedId);
  const selectLabelCollection = useNewTabStore(
    (state) => state.selectLabelCollection
  );

  return (
    <div
      className={[
        selectedId === prop.id ? 'bg-gray-400' : '',
        styles['menu-item-icon'],
      ].join(' ')}
      onClick={() => selectLabelCollection(prop.id)}
    >
      <LabelConnectionIcon icon={prop.icon} />
    </div>
  );
}

export function LabelCollections(): React.JSX.Element {
  const labelCollections = useNewTabStore((state) => state.labelCollections);

  return (
    <div className={styles['left-container']}>
      {labelCollections.map((item) => (
        <div className={styles['menu-item']} key={item.id}>
          <Icon {...item} />

          <div className={styles['menu-item-txt']}>
            <div>{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
