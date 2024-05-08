import type { Meta, StoryFn } from '@storybook/react';

import type { NavRailProps } from '.';
import { NavRail } from '.';
import { cn } from '@/utils';

export default {
  component: NavRail,
  title: 'NavRail',
  args: {},
  argTypes: {},
} satisfies Meta;

const Template: StoryFn<NavRailProps> = (args) => {
  return (
    <div
      className={cn(
        'flex min-h-svh w-screen items-center justify-center',
        args.variant === 'dark' ? 'bg-black' : 'bg-tan-200',
      )}
    >
      <NavRail {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {} satisfies NavRailProps;
