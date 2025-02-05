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

  selectLabelCollection: (id: string) => void;
}
