import type { Meta, StoryFn } from '@storybook/react';

import type { ErrorMessageProps } from '.';
import { ErrorMessage } from '.';

export default {
  component: ErrorMessage,
  title: 'ErrorMessage',
  args: {},
  argTypes: {},
} satisfies Meta;

const Template: StoryFn<ErrorMessageProps> = (args) => {
  return (
    <div className="h-svh w-screen bg-black p-8">
      <ErrorMessage {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  messageContent:
    'Unexpected service error occurred. Please visit https://dev.hume.ai/support for assistance.',
} satisfies ErrorMessageProps;
