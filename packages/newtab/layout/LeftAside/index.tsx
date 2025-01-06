import React from 'react';
import { Line, Menu, Setting } from './Components';
import { HuoAvatar } from '@common/components/Avatar';
import { MenuItem } from '@common/components/MenuItem';

export function LeftAside(): React.JSX.Element {
  return (
    <div
      className="
        w-full h-full flex flex-col justify-center
      "
    >
      <div className="ml-2 p-2 bg-slate-100 h-sidebar rounded-xl flex flex-col">
        <HuoAvatar />

        <Line />

        <Menu />

        <Line />

        <div className="mt-2">
          <MenuItem icon="subway:add" />
        </div>
      </div>

      <Setting />
    </div>
  );
}
