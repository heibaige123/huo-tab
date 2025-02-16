import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { LabelCollectionItemType, NewTabStoreType } from './types';

const labelCollections: Array<LabelCollectionItemType> = [
  {
    icon: 'icon-park-twotone:arena',
    name: '主页',
    id: nanoid(),
    isSelect: true,
    contentBack: {
      'image': 'repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient( #444cf755, #444cf7 )'
    },
    content: [{
      title: '1'
    }]
  },
  {
    icon: 'icon-park-twotone:boy-stroller',
    name: 'boy-stroller',
    id: nanoid(),
    isSelect: false,
    contentBack: {
      'image': 'linear-gradient(135deg, #444cf755 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(225deg, #444cf7 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, #444cf755 25%, transparent 25%) 0px 0/ 20px 20px, linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%) 0px 0/ 20px 20px'
    },
    content: [{
      title: '2'
    }]
  },
  {
    icon: 'icon-park-twotone:bitcoin',
    name: 'bitcoin',
    id: nanoid(),
    isSelect: false,
    contentBack: {
      'image': 'linear-gradient(0deg, #e5e5f7 50%, #444cf7 50%)',
    },
    content: [{
      title: '3'
    }]
  },
  {
    icon: 'icon-park-twotone:api',
    name: 'api',
    id: nanoid(),
    isSelect: false,
    contentBack: {
      image: 'radial-gradient(circle at center center, #444cf7, #e5e5f7), repeating-radial-gradient(circle at center center, #444cf7, #444cf7, 10px, transparent 20px, transparent 10px)'
    },
    content: [{
      title: '4'
    }]
  },
  {
    icon: 'icon-park-twotone:bear',
    name: 'bear',
    id: nanoid(),
    isSelect: false,
    contentBack: {
      'image': 'linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777)'
    },
    content: [{
      title: '5'
    }]
  },
  {
    icon: 'icon-park-twotone:application',
    name: 'application',
    id: nanoid(),
    isSelect: false,
    contentBack: {
      'image': 'linear-gradient(45deg, #444cf7 50%, #e5e5f7 50%)',
    },
    content: [{
      title: '6'
    }]
  },
  {
    icon: 'icon-park-twotone:apple',
    name: 'apple',
    id: nanoid(),
    isSelect: false,
    contentBack: {
      'image': 'repeating-linear-gradient(45deg, #444cf7 25%, transparent 25%, transparent 75%, #444cf7 75%, #444cf7), repeating-linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%, #e5e5f7 75%, #444cf7 75%, #444cf7)'
    },
    content: [{
      title: '7'
    }]
  },
];

export const useNewTabStore = create<NewTabStoreType>((set, get) => ({
  labelCollections: labelCollections,
  selectedId: labelCollections[0].id,
  showTabIndex: 0,

  containerContentHeight: 0,


  // get actions
  getLabelLength: () => get().labelCollections.length || 1,

  // set actions

  selectLabelCollection: (id: string) => set((state) => ({
    selectedId: id,
    labelCollections: state.labelCollections.map((item) => {
      if (item.id === id) {
        item.isSelect = true;
      } else {
        item.isSelect = false;
      }
      return item;
    }),
    showTabIndex: state.labelCollections.findIndex((item) => item.id === id)
  })),

  setContainerContentHeight: (height: number) => set((state) => ({
    containerContentHeight: height || 0
  })),

  setShowTabIndex: (index: number) => set((state) => ({
    showTabIndex: index,
    selectedId: state.labelCollections[index].id
  })),

}));

export function useNewTabStoreState() {
  const labelCollections = useNewTabStore((state) => state.labelCollections);
  const selectedId = useNewTabStore((state) => state.selectedId);
  const showTabIndex = useNewTabStore((state) => state.showTabIndex);
  const containerContentHeight = useNewTabStore((state) => state.containerContentHeight);
  
  const getLabelLength = useNewTabStore((state) => state.getLabelLength);
  
  const selectLabelCollection = useNewTabStore((state) => state.selectLabelCollection);
  const setContainerContentHeight = useNewTabStore((state) => state.setContainerContentHeight);
  const setShowTabIndex = useNewTabStore((state) => state.setShowTabIndex);

  return {
    labelCollections,
    selectedId,
    showTabIndex,
    containerContentHeight,

    getLabelLength,

    selectLabelCollection,
    setContainerContentHeight,
    setShowTabIndex
  };
}