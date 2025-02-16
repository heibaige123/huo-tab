import React from 'react';
import { Input } from '@common/shadcn/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@common/shadcn/form';

import { useForm } from 'react-hook-form';
import { ChangeSearchPanel } from './ChangeSearchPanel';
import { Icon } from '@iconify/react';

const inputStyle = `
  focus-within:bg-opacity-100
  
  bg-white bg-opacity-60 backdrop-opacity-40 border-0
  h-[50px]
  flex
  rounded
`;

const formItemStyle = `
  focus-visible:bg-opacity-90
  focus-visible:ring-0
  focus-visible:!outline-0
  border-none
  pl-[4px]
  pr-[42px]
  py-[12px]
  !mt-0
  h-full
  text-2xl
  font-semibold
`;

export function Header(): React.JSX.Element {
  const form = useForm();

  function onSubmit() {}

  return (
    <div className="h-[var(--header-height)] pt-[5%] w-[80%] min-w-[100px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className={inputStyle}>
                <FormLabel className="p-[10px]">
                  <div className='w-full h-full flex justify-center items-center'>
                    <Icon
                      icon="devicon:google"
                      className="cursor-pointer"
                      width={22}
                      height={23}
                    />
                  </div>
                </FormLabel>

                <FormControl>
                  <Input
                    placeholder="请输入内容"
                    className={formItemStyle}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>

      <ChangeSearchPanel />
    </div>
  );
}
