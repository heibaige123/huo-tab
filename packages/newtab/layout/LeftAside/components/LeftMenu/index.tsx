import { MenuItem } from '../MenuItem';
import * as React from 'react';
import { useNewTabStore } from '@store/index';

export function LeftMenu(): React.JSX.Element {
  const leftMenuList = useNewTabStore((state) => state.leftMenuList);
  const [selectIndex, setSelectIndex] = React.useState(0);

  return (
    <div className="mt-2 overflow-y-hidden relative w-[200px]">
      {leftMenuList.map((item, index) => (
        <div className="flex items-center h-14 relative">
          <div
            className={[
              selectIndex === index ? 'bg-gray-400' : '',
              'rounded-sm',
              'peer',
            ].join(' ')}
          >
            <MenuItem
              key={index}
              icon={item.icon}
              onClick={() => setSelectIndex(index)}
            />
          </div>

          <div
            className="
              ml-2 px-2 py-[2px] select-none rounded-sm text-center
              text-white font-medium
              transition-category-pointer
              peer-hover:max-w-[84px] 
              peer-hover:bg-white peer-hover:text-black
              peer-hover:bg-opacity-80 peer-hover:ml-3
              peer-hover:font-ali-65 peer-hover:text-color-t2
              peer-hover:shadow-menu-card
            "
          >
            <div>{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
