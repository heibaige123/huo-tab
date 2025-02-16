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
    return state.labelCollections[state.showTabIndex];
  });

  return (
    <AppContainer backImg={currentLabelCollection.contentBack.image}>
      <div className="h-full w-[60px]">
        <LeftAside />
      </div>

      <div className="flex-1 relative ml-[100px]">
        <div className="absolute top-0 z-10 w-full flex justify-center px-[100px]">
          <Header />
        </div>
        <div className="absolute top-0 bottom-0 w-full">
          <Content />
        </div>
      </div>

      <div className="h-full w-[80px]">
        <RightAside />
      </div>
    </AppContainer>
  );
}
