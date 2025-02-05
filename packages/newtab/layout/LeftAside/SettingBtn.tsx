import { LabelConnectionIcon } from "./LabelConnectionIcon";
import React from 'react';

export function SettingBtn(): React.JSX.Element {
  return (
    <div className="ml-2 p-2 absolute bottom-6">
      <LabelConnectionIcon icon="lets-icons:setting-fill" />
    </div>
  );
}
