import type { Meta, StoryFn } from '@storybook/react';

import type { SearchInProgressProps } from '.';
import { SearchInProgress } from '.';

export default {
  component: SearchInProgress,
  title: 'SearchInProgress',
  args: {},
  argTypes: {},
} satisfies Meta;

const Template: StoryFn<SearchInProgressProps> = (args) => {
  return (
    <div className="h-svh w-screen bg-black p-8">
      <SearchInProgress {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {} satisfies SearchInProgressProps;
