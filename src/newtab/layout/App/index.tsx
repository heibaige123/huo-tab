import React from 'react';
import BackImg from '@img/back.jpg';

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
