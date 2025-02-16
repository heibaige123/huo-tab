import React from 'react';
import { HuoAvatar } from '@common/components/Avatar';
import { LabelCollections } from './LabelCollections';
import { Line } from './Line';
import { SettingBtn } from './SettingBtn';
import { AddBtn } from './AddBtn';

import Styles from './index.module.scss';

export function LeftAside(): React.JSX.Element {
  return (
    <div className={Styles['left-aside-container']}>
      <div className={Styles['left-aside-content']}>
        <div>
          <HuoAvatar />
          <Line />
        </div>

        <LabelCollections />

        <div>
          <Line />

          <div className="mt-4">
            <AddBtn />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <SettingBtn />
      </div>
    </div>
  );
}
