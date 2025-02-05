import { useNewTabStore } from '@store/index';
import React from 'react';

export function Content(): React.JSX.Element {
  const currentLabelCollection = useNewTabStore((state) => {
    return (
      state.labelCollections.find(
        (labelCollection) => labelCollection.id === state.selectedId
      ) || state.labelCollections[0]
    );
  });

  return (
    <div>
      <div className="bg-red-700 w-96 h-96">
        {currentLabelCollection.content[0].title}
      </div>
    </div>
  );
}
