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
      <div className="h-full w-[60px] absolute top-0 left-0 z-10">
        <LeftAside />
      </div>

      <div className="">
        <div className='absolute top-0 left-[200px] z-10'>
          <Header />
        </div>
        <div className='top-0 bottom-0 left-0 right-0 fixed'>
          <Content />
        </div>
      </div>

      <div>
        <RightAside />
      </div>
    </AppContainer>
  );
}
