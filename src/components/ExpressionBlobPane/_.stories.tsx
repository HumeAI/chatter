import type { Meta, StoryFn } from '@storybook/react';

import { createMockAgentMessage } from '@/utils/mocks';
import type { ExpressionBlobPaneProps } from '.';
import { ExpressionBlobPane } from '.';

export default {
  component: ExpressionBlobPane,
  title: 'ExpressionBlobPane',
  args: {},
  argTypes: {},
} satisfies Meta;

const Template: StoryFn<ExpressionBlobPaneProps> = (args) => {
  return <ExpressionBlobPane {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  lastVoiceMessage: createMockAgentMessage(),
} satisfies ExpressionBlobPaneProps;
