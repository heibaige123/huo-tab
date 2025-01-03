import React from 'react';
import BackImg from '@common/images/back.jpg';

export function App(): React.JSX.Element {
  return (
    <div
      className="w-screen h-screen"
      style={{ backgroundImage: `url(${BackImg})` }}
    >
      <h2>webpack-react-ts</h2>
    </div>
  );
}
