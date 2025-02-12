import React from 'react';
import tw, { styled } from 'twin.macro';

import { LeftAside } from '../layout/LeftAside';
import { Header } from '../layout/Header/index';
import { Content } from '../layout/Content/index';
import { RightAside } from '../layout/RightAside/index';
import { useNewTabStore } from '@store/index';

const AppContainer = styled.div<{ backImg?: string }>(({ backImg }) => [
  backImg && `background: ${backImg}`,
  tw`w-screen h-screen flex justify-between`,
]);

export function App(): React.JSX.Element {
  const currentLabelCollection = useNewTabStore((state) => {
    return (
      state.labelCollections.find(
        (labelCollection) => labelCollection.id === state.selectedId
      ) || state.labelCollections[0]
    );
  });

  return (
    <AppContainer backImg={currentLabelCollection.contentBack.image}>
      <div className="h-full w-[60px]">
        <LeftAside />
      </div>

      <div className="">
        <div>
          <Header />
        </div>
        <div>
          <Content />
        </div>
      </div>

      <div>
        <RightAside />
      </div>
    </AppContainer>
  );
}
