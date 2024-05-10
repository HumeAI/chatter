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
Default.args = {
  message: {
    tool_call_id: '123',
    type: 'tool_call',
    parameters: JSON.stringify({
      query: 'test',
    }),
    receivedAt: new Date(),
    name: 'web_search',
    tool_type: 'builtin',
    response_required: true,
  },
} satisfies SearchInProgressProps;
