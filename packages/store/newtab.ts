import { create } from 'zustand'

const leftMenuLit = [
  {
    icon: 'icon-park-twotone:arena',
    name: '主页',
  },
  {
    icon: 'icon-park-twotone:arrow-keys',
    name: 'home',
  },
];

for (let i = 0; i < 3; i++) {
  leftMenuLit.push(...leftMenuLit);
}

export const useNewTabStore = create<{
  leftMenuList: typeof leftMenuLit
}>((set) => ({
  leftMenuList: leftMenuLit
}))
