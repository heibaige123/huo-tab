export interface LabelCollectionItemType {
  icon: string;
  name: string;
  id: string;
  contentBack: {
    'image'?: string;
    'color'?: string;
  },
  isSelect: boolean;
  content: {
    title: string;
  }[];
}

export interface NewTabStoreType {
  labelCollections: LabelCollectionItemType[];
  selectedId: LabelCollectionItemType['id'];

  containerContentHeight: number;

  getLabelLength: () => number;

  showTabIndex: number;

  selectLabelCollection: (id: string) => void;
  setContainerContentHeight: (height: number) => void;

  setShowTabIndex: (index: number) => void;
}
