import type { Meta, StoryFn } from '@storybook/react';

import { OnAir } from '@/components/OnAir';
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
      <OnAir />
      <SearchInProgress {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: {
    toolCallId: '123',
    type: 'tool_call',
    parameters: JSON.stringify({
      query: 'test',
    }),
    receivedAt: new Date(),
    name: 'web_search',
    toolType: 'builtin',
    responseRequired: true,
  },
} satisfies SearchInProgressProps;
