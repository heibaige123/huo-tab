import React, { JSX } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@shadcn/avatar';

export function HuoAvatar(): JSX.Element {
  return (
    <Avatar className="rounded-xl">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
