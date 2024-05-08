import type { Meta, StoryFn } from '@storybook/react';

import type { WaitingOnHostProps } from '.';
import { WaitingOnHost } from '.';

export default {
  component: WaitingOnHost,
  title: 'WaitingOnHost',
  args: {},
  argTypes: {},
} satisfies Meta;

const Template: StoryFn<WaitingOnHostProps> = (args) => {
  return (
    <div className="h-svh w-screen bg-black p-8">
      <WaitingOnHost {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {} satisfies WaitingOnHostProps;
