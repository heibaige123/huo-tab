import React, { JSX } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '^shadcn/avatar';

export function HuoAvatar(): JSX.Element {
  return (
    <Avatar className="rounded-xl shadow-md cursor-pointer w-[36px] h-[36px]">
      <AvatarImage src="https://img.icons8.com/?size=100&id=118555&format=png&color=000000" />
      <AvatarFallback>头像</AvatarFallback>
    </Avatar>
  );
}
