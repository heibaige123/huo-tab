import React from 'react';
import { HuoAvatar } from '@common/components/Avatar';
import { LabelCollections } from './LabelCollections';
import { Line } from './Line';
import { SettingBtn } from './SettingBtn';
import { AddBtn } from './AddBtn';

export function LeftAside(): React.JSX.Element {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="ml-2 p-2 bg-slate-100 h-sidebar rounded-xl flex flex-col justify-between">
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

