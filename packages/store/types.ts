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

  showTabIndex: number;

  getContentHeight: () => {
    containerHeight: number;
    labelItemHeight: number;
  };

  selectLabelCollection: (id: string) => void;
  setShowTabIndex: (index: number) => void;
}
