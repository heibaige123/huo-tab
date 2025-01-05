import React from 'react';
import BackImg from "@common/images/back.jpg";

import { LeftAside } from '../LeftAside';
import { Header } from '../Header/index';
import { Content } from '../Content/index';
import { RightAside } from '../RightAside/index';

export function App(): React.JSX.Element {
  return (
    <div
      className="w-screen h-screen flex justify-between"
      style={{ backgroundImage: `url(${BackImg})` }}
    >
      <div className="h-full w-40">
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
    </div>
  );
}
