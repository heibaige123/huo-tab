import { create } from 'zustand';
import { nanoid } from 'nanoid';

interface MenuItemType {
  icon: string;
  name: string;
  id: string;
  contentBack: {
    'image'?: string;
    'color'?: string;
  },
  isSelect: boolean;
}

const leftMenuLit: Array<MenuItemType> = [
  {
    icon: 'icon-park-twotone:arena',
    name: '主页',
    id: nanoid(),
    isSelect: true,
    contentBack: {
      'image': 'repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient( #444cf755, #444cf7 )'
    }
  },
  {
    icon: 'icon-park-twotone:boy-stroller',
    name: 'boy-stroller',
    id: nanoid(),
    isSelect: false,
    contentBack: {
      'image': 'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)'
    }
  },
  {
    icon: 'icon-park-twotone:bitcoin',
    name: 'bitcoin',
    id: nanoid(),
    isSelect: false,
    contentBack: {
      'image': 'linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(to right, #444cf7 1px, #e5e5f7 1px)',
    }
  },
  {
    icon: 'icon-park-twotone:api',
    name: 'api',
    id: nanoid(),
    isSelect: false,
    contentBack: {
      image: 'repeating-linear-gradient( 45deg, #444cf7, #444cf7 5px, #e5e5f7 5px, #e5e5f7 25px )'
    }
  },
  {
    icon: 'icon-park-twotone:bear',
    name: 'bear',
    id: nanoid(),
    isSelect: false,
    contentBack: {
      'image': 'linear-gradient(45deg, #444cf7 50%, #e5e5f7 50%)'
    }
  },
  {
    icon: 'icon-park-twotone:application',
    name: 'application',
    id: nanoid(),
    isSelect: false,
    contentBack: {
      'image': 'repeating-linear-gradient(0deg, #444cf7, #444cf7 1px, #e5e5f7 1px, #e5e5f7)',
    }
  },
  {
    icon: 'icon-park-twotone:apple',
    name: 'apple',
    id: nanoid(),
    isSelect: false,
    contentBack: {
      'image': 'radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent) 25px 25px, linear-gradient(#444cf7 2px, transparent 2px) 0 -1px, linear-gradient(90deg, #444cf7 2px, #e5e5f7 2px) -1px 0'
    }
  },
];

export const useNewTabStore = create<{
  leftMenuList: typeof leftMenuLit
}>((set) => ({
  leftMenuList: leftMenuLit,

  focusMenu: (id: string) => set((state) => {
    state.leftMenuList = state.leftMenuList.map((item) => {
      if (item.id === id) {
        item.isSelect = true;
      } else {
        item.isSelect = false;
      }
      return item;
    });
  })
}));
