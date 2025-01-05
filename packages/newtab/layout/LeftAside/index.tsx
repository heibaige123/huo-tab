import React from 'react';

import { HuoAvatar } from '@components/Avatar/index';
import { HuoIcon } from '@components/Icon';

export function LeftAside(): React.JSX.Element {
  return (
    <div className="bg-slate-100 h-full w-full flex items-center">
      <div className="bg-opacity-40 bg-black h-96 p-2 rounded-lg ml-3 cursor-pointer select-none flex flex-col items-center">
        <HuoAvatar />

        <HuoIcon icon="pepicons-pop:line-x"  className="text-gray-500 h-4 w-10"/>
      </div>
    </div>
  );
}
