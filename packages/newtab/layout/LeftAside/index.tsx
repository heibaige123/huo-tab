import React from 'react';
import { HuoAvatar } from '@common/components/Avatar';
import { LeftMenu } from './components/LeftMenu';
import { AddBtn } from './components/SettingBtn';
import { MenuLine } from './components/MenuLine';
import { SettingBtn } from './components/AddBtn';

export function LeftAside(): React.JSX.Element {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="ml-2 p-2 bg-slate-100 h-sidebar rounded-xl flex flex-col justify-between">
        <div>
          <HuoAvatar />
          <MenuLine />
        </div>

        <LeftMenu />

        <div>
          <MenuLine />

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
