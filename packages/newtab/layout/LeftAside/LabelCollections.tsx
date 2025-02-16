import * as React from 'react';
import Styles from './LabelCollections.module.scss';
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
        Styles['left-item-icon'],
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
    <div className={Styles['left-container']}>
      {labelCollections.map((item) => (
        <div className={Styles['left-item']} key={item.id}>
          <Icon {...item} />

          <div className={Styles['left-item-txt']}>
            <div>{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
