import { MenuItem } from '../MenuItem';
import * as React from 'react';

export function SettingBtn(): React.JSX.Element {
  return (
    <div className="ml-2 p-2 absolute bottom-6">
      <MenuItem icon="lets-icons:setting-fill" />
    </div>
  );
}
