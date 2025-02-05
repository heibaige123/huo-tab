import { HuoIcon } from "@common/components/Icon";
import { IconProps } from "@iconify/react";
import React from 'react';

export function LabelConnectionIcon(props: IconProps): React.JSX.Element {
  return (
    <div className="cursor-pointer hover:bg-gray-400 p-1 rounded-sm">
      <HuoIcon {...props} width="28" height="28" />
    </div>
  );
}
