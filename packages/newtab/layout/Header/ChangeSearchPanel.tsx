import React from 'react';
import { Icon, IconifyIcon } from '@iconify/react';
import { Panel } from './Panel';

function ChangeSearchIcon({
  icon,
  text,
}: {
  icon: string | IconifyIcon;
  text: string;
}): React.JSX.Element {
  return (
    <div className="ml-[10px]">
      <div className="w-[48px] h-[48px] hover:shadow-xl cursor-pointer flex justify-center items-center rounded-md">
        <Icon icon={icon} className="" width="24" height="24" />
      </div>
      <div className="flex justify-center">
        <span>{text}</span>
      </div>
    </div>
  );
}

export function ChangeSearchPanel(): React.JSX.Element {
  return (
    <Panel>
      <ChangeSearchIcon icon="devicon:google" text="Google" />
      <ChangeSearchIcon icon="logos:bing" text="Bing" />
      <ChangeSearchIcon icon="simple-icons:baidu" text="Baidu" />
      <ChangeSearchIcon icon="tabler:view-360-number" text="360" />
      <ChangeSearchIcon icon="vscode-icons:file-type-yandex" text="Yandex" />
    </Panel>
  );
}
