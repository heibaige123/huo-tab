import { useNewTabStore } from '@store/index';
import React, { useRef } from 'react';
import tw, { styled, css } from 'twin.macro';

const Styles = {
  common: tw`h-[calc(100vh-var(--header-height))]`,
};

const Container = styled.div(() => [
  Styles.common,
  tw`overflow-y-auto snap-y snap-mandatory w-[calc(100vw-500px)] [&::-webkit-scrollbar]:hidden`,
]);

const ContentInner = styled.section(() => [Styles.common, tw`snap-start`]);

export function Content(): React.JSX.Element {
  const labelCollections = useNewTabStore((state) => state.labelCollections);

  return (
    <Container>
      {labelCollections.map((item) => {
        return (
          <ContentInner key={item.id}>
            <div className="bg-red-700 w-full h-full">
              {item.content[0].title}
            </div>
          </ContentInner>
        );
      })}
    </Container>
  );
}
