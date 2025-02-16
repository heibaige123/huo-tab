import React from 'react';

export function Panel({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <section className="bg-white mt-1 rounded p-[20px]">
      <div className="flex">{children}</div>
    </section>
  );
}
