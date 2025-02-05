import { HuoIcon } from '^components/Icon';
import { IconProps } from '@iconify/react';
import * as React from 'react';

export function MenuItem(props: IconProps): React.JSX.Element {
  return (
    <div className="cursor-pointer hover:bg-gray-400 p-1 rounded-sm">
      <HuoIcon {...props} width="28" height="28" />
    </div>
  );
}
